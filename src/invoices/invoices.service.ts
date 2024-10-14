import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddPaymentDto, CreateInvoiceDto } from 'src/dto/invoices';
import { Invoice } from 'src/schemas/Invoice.schema';
import { Payment } from 'src/schemas/Payment.schema';
import { Student } from 'src/schemas/Student.schema';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectModel(Invoice.name) private invoiceModel: Model<Invoice>,
    @InjectModel(Payment.name) private paymentModel: Model<Payment>,
    @InjectModel(Student.name) private studentModel: Model<Student>,
  ) {}

  async createInvoice(createInvoiceDto: CreateInvoiceDto) {
    const { studentId, familyId } = createInvoiceDto;

    // Validate that only one of studentId or familyId is present
    if (studentId && familyId) {
      throw new BadRequestException(
        'You can only provide either student or family, not both.',
      );
    }

    const totalAmount =
      createInvoiceDto.schoolPrice + createInvoiceDto.busPrice;

    const invoice = new this.invoiceModel({
      ...createInvoiceDto,
      totalAmount,
      date: new Date(),
    });

    const savedInvoice = await invoice.save();

    if (createInvoiceDto.familyId) {
      // If it's a family invoice, update all students in the family
      await this.studentModel.updateMany(
        { family: createInvoiceDto.familyId },
        { $push: { invoices: savedInvoice._id } },
      );
    } else {
      // If it's an individual student invoice
      await this.studentModel.findByIdAndUpdate(createInvoiceDto.studentId, {
        $push: { invoices: savedInvoice._id },
      });
    }

    return savedInvoice;
  }

  // async createInvoice(createInvoiceDto: CreateInvoiceDto) {
  //   const totalAmount =
  //     createInvoiceDto.schoolPrice + createInvoiceDto.busPrice;

  //   const invoice = new this.invoiceModel({
  //     ...createInvoiceDto,
  //     totalAmount,
  //     date: new Date(),
  //   });

  //   const savedInvoice = await invoice.save();

  //   await this.studentModel.findByIdAndUpdate(createInvoiceDto.studentId, {
  //     $push: { invoices: savedInvoice._id },
  //   });

  //   return savedInvoice;
  // }

  async getInvoices() {
    const invoices = await this.invoiceModel
      .find()
      .populate('studentId', 'name')
      .populate('familyId', 'familyName')
      .populate('payments')
      .exec();

    return invoices.map((invoice) => {
      const name = invoice.studentId
        ? invoice.studentId.name
        : invoice.familyId?.familyName;

      const totalPaid = invoice.payments.reduce((sum, payment) => {
        return (
          sum + (payment.paidSchoolAmount || 0) + (payment.paidBusAmount || 0)
        );
      }, 0);

      const remainingAmount = invoice.totalAmount - totalPaid;

      return {
        ...invoice.toObject(),
        remainingAmount,
        totalPaid,
        name,
      };
    });
  }

  async getInvoiceById(invoiceId: string) {
    const invoice = await this.invoiceModel
      .findById(invoiceId)
      .populate('payments')
      .populate({
        path: 'studentId',
        select: 'name',
      })
      .exec();

    const totalPaid = invoice.payments.reduce((sum, payment) => {
      return (
        sum + (payment.paidSchoolAmount || 0) + (payment.paidBusAmount || 0)
      );
    }, 0);

    const remainingAmount = invoice.totalAmount - totalPaid;

    return {
      ...invoice.toObject(),
      remainingAmount,
      totalPaid,
    };
  }

  async addPayment(addPaymentDto: AddPaymentDto) {
    const payment = new this.paymentModel({
      ...addPaymentDto,
      date: new Date(),
    });
    const savedPayment = await payment.save();

    await this.invoiceModel.findByIdAndUpdate(
      addPaymentDto.invoiceId,
      { $push: { payments: savedPayment._id } },
      { new: true },
    );

    return savedPayment;
  }

  async getRemainingBalance(
    invoiceId: string,
  ): Promise<{ remainingSchoolAmount: number; remainingBusAmount: number }> {
    const invoice = await this.invoiceModel.findById(invoiceId).exec();
    const payments = await this.paymentModel.find({ invoiceId }).exec();

    const totalPaidSchool = payments.reduce(
      (sum, payment) => sum + payment.paidSchoolAmount,
      0,
    );
    const totalPaidBus = payments.reduce(
      (sum, payment) => sum + payment.paidBusAmount,
      0,
    );

    const remainingSchoolAmount = invoice.schoolPrice - totalPaidSchool;
    const remainingBusAmount = invoice.busPrice - totalPaidBus;

    return { remainingSchoolAmount, remainingBusAmount };
  }
}

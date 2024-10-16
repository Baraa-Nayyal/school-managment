import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { InvoiceService } from './invoices.service';
import { AddPaymentDto, CreateInvoiceDto } from 'src/dto/invoices';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('invoices')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  createInvoice(@Body() createInvoiceDto: CreateInvoiceDto) {
    return this.invoiceService.createInvoice(createInvoiceDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  GetInvoices() {
    return this.invoiceService.getInvoices();
  }

  @Delete('delete/:id')
  DeleteInvoiceById(@Param('id') id: string) {
    return this.invoiceService.deleteInvoice(id)
  }


  @Get('/details/:id')
  @UseGuards(JwtAuthGuard)
  GetInvoiceById(@Param('id') id: string) {
    return this.invoiceService.getInvoiceById(id);
  }

  @Post('add-payment')
  @UseGuards(JwtAuthGuard)
  addPayment(@Body() addPaymentDto: AddPaymentDto) {
    return this.invoiceService.addPayment(addPaymentDto);
  }

  // remaining balance
  @Get(':invoiceId/balance')
  @UseGuards(JwtAuthGuard)
  getRemainingBalance(@Param('invoiceId') invoiceId: string) {
    return this.invoiceService.getRemainingBalance(invoiceId);
  }
}

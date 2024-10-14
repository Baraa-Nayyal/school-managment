import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InvoiceService } from './invoices.service';
import { AddPaymentDto, CreateInvoiceDto } from 'src/dto/invoices';

@Controller('invoices')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  createInvoice(@Body() createInvoiceDto: CreateInvoiceDto) {
    return this.invoiceService.createInvoice(createInvoiceDto);
  }

  @Get()
  GetInvoices() {
    return this.invoiceService.getInvoices();
  }

  @Get('/details/:id')
  GetInvoiceById(@Param('id') id: string) {
    return this.invoiceService.getInvoiceById(id);
  }

  @Post('add-payment')
  addPayment(@Body() addPaymentDto: AddPaymentDto) {
    return this.invoiceService.addPayment(addPaymentDto);
  }

  // remaining balance
  @Get(':invoiceId/balance')
  getRemainingBalance(@Param('invoiceId') invoiceId: string) {
    return this.invoiceService.getRemainingBalance(invoiceId);
  }
}

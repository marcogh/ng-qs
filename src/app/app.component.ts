import { Component } from '@angular/core';

export class InvoiceLine{
  id: number;
  description: string;
  item_price: number;
  item_qty: number;
  item_unit: string;
  total: number;
}

export class Invoice {
  id: number;
  fiscal_no: number;
  fiscal_year: number;
  amount: number;
  invoiceLine: InvoiceLine[];
}

const INVOICES: Invoice[] = [
  { id: 11, fiscal_year: 2016, fiscal_no: 1, amount: 1200.00, invoiceLine: [] },
  { id: 12, fiscal_year: 2016, fiscal_no: 2, amount: 6100.00, invoiceLine: [] },
  { id: 13, fiscal_year: 2016, fiscal_no: 3, amount: 1200.00, invoiceLine: [] },
  { id: 14, fiscal_year: 2016, fiscal_no: 4, amount: 2100.00, invoiceLine: [] },
  { id: 15, fiscal_year: 2016, fiscal_no: 5, amount: 3300.00, invoiceLine: [] },
  { id: 16, fiscal_year: 2016, fiscal_no: 6, amount: 3200.00, invoiceLine: [] }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fattura.me';
  user = 'marco.ghidinelli';
  invoices = INVOICES;
  selectedInvoice: Invoice;

  onSelect(invoice: Invoice): void {
    this.selectedInvoice = invoice;
  }
}
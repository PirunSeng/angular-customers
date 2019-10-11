// angular imports
import { Component, OnInit, Input } from '@angular/core';

// custom imports
import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html'
})
export class CustomersListComponent implements OnInit {
  private _customers: ICustomer[] = [];
  @Input() get customers(): ICustomer[] {
    return this._customers;
  }

  set customers(value: ICustomer[]) {
    if (value) {
      this.filteredCustomers = this._customers = value;
      this.calculateOrders();
    }
  }
 
  filteredCustomers: ICustomer[] = [];
  customersOrderTotal: number;
  currencyCode = 'USD';

  constructor(){}

  ngOnInit() {}

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customersOrderTotal += cust.orderTotal;
    });
  }

  sort(prop: string) {

  }

  filter(data: string) {
    if (data) {
      this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
        return cust.name.toLocaleLowerCase().indexOf(data.toLocaleLowerCase()) > -1 ||
               cust.city.toLocaleLowerCase().indexOf(data.toLocaleLowerCase()) > -1 ||
               cust.orderTotal.toString().indexOf(data) > -1;
      });
    } else {
      this.filteredCustomers = this.customers;
    }
    this.calculateOrders();
  }
}

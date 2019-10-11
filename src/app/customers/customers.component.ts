import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interfaces';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html'
})
export class CustomersComponent implements OnInit {
  title: string;
  people: ICustomer[];
  
  constructor(){

  }

  ngOnInit() {
    this.title = 'Customers';
    this.people = [
      {id: 1, name: 'Pirun Seng', city: 'Phnom Penh', orderTotal: 9.99, customerSince: new Date(2015, 7, 10)},
      {id: 2, name: 'Seng', city: 'Kandal', orderTotal: 6.99, customerSince: new Date(2016, 6, 10)},
      {id: 3, name: 'Nico', city: 'Kompong Cham', orderTotal: 3.99, customerSince: new Date(2017, 7, 1)},
      {id: 4, name: 'Rainy', city: 'Siem Reap', orderTotal: 10.99, customerSince: new Date(2013, 3, 3)}
    ];
  }  
}

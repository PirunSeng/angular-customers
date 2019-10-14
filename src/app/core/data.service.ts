import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ICustomer, IOrder } from '../shared/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  baseUrl = 'assets/';

  constructor(
    private http: HttpClient
  ) {

  }

  getOrders(id: number): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.baseUrl + 'orders.json')
      .pipe(
        map(orders => {
          const custOrders = orders.filter((order: IOrder) => order.customerId === id );
          return custOrders;
        }),
        catchError(this.handleError)
      );
  }

  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
      .pipe(
        catchError(this.handleError)
      );
  }

  getCustomer(id: number): Observable<ICustomer> {
    return this.http.get<ICustomer[]>(this.baseUrl + 'customers.json')
      .pipe(
        map(customers => {
          const customer = customers.filter((cust: ICustomer) => cust.id === id);
          return (customer && customer.length) ? customer[0] : null;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('server error: ', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Node.js server error');
  }
}

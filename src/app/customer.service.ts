import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './modal/customer';
import { API_CONFIG } from './config/api_config';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url: string = API_CONFIG.urlApi;

  constructor(private http: HttpClient) { }

  save(customer: Customer): Observable<Customer[]> {
    return this.http.post<Customer[]>(this.url+'/customer/insert',customer);
  }
}

import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../modal/customer';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {


constructor(private service: CustomerService){

}

ngOnInit():void {
  this.saveCustomer();
}

customer: Customer = {
  idCustomer: '',
  firstNameCustomer: 'jonathan',
  lastNameCustomer: 'santos',
  birthdateCustomer: '01/05/2002',
  dateCreatedCustomer: '',
  monthlyIncomeCustomer: '10',
  cpfCustomer: '84676423649',
  emailCustomer: 'jonathan@gmail.com',
  passwordCustomer: '123',
  statusCustomer: true
}

saveCustomer (){
  console.log(this.customer);
  this.service.save(this.customer).subscribe();
  
}

}

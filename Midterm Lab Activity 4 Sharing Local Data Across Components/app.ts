import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Employee } from './employee';
import { Products } from './products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']   // must be `styleUrls`
})
export class App implements OnInit {

  public employees: any[] = [];
  public products: any[] = [];

  constructor(
    private employeeService: Employee,
    private productService: Products
  ) {}

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
    this.products = this.productService.getProducts();

    console.log('Employees:', this.employees);
    console.log('Products:', this.products);
  }
}

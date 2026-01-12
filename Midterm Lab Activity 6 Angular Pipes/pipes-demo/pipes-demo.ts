import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, DecimalPipe, UpperCasePipe, LowerCasePipe, AsyncPipe } from '@angular/common';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    DecimalPipe,
    AsyncPipe
  ],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  presentDate = new Date();

  senderName = 'Francis Allen Santos';
  receiverName = 'FreshMart Grocery';

  amount: number = 434.28;
  serviceFee: number = 5.00;
  totalPaid: number = 439.28;

  referenceNumber: string = 'GC' + Math.floor(Math.random() * 1000000000);

  walletBalance: number = 1250.75;

  // Fixed Observable for live time
  currentTime$ = interval(1000).pipe(
    map(() => new Date())
  );
}

import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule} from '@ionic/angular';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
  standalone: true,
  imports: [ IonicModule, DatePipe ]
})
export class TransactionsPage implements OnInit {

  allTransactions: any[] = [];
  transactions: any[] = [];
  segmentValue = 'in';
  constructor() { }

  ngOnInit() {
    this.allTransactions = [
      {id: 1, to: 'Amara Robertson', date: '2025-05-22', amount: 5000},
      {id: 2, to: 'Alora King', date: '2025-04-12', amount: 7000},
      {id: 3, to: 'Faith Work', date: '2025-11-02', amount: -335},
      {id: 4, to: 'John Cane', date: '2025-02-29', amount: 100},
      {id: 5, to: 'Lavaria Saw', date: '2025-07-11', amount: -200},
    ];
    this.filterTransactions();
  }

  filterTransactions() {
    if(this.segmentValue == 'in') {
      this.transactions = this.allTransactions.filter(x => x.amount >= 0);
    } else {
      this.transactions = this.allTransactions.filter(x => x.amount < 0);
    }
  }

  segmentChanged(event: any) {
    console.log(event);
    this.segmentValue = event.detail.value;
    this.filterTransactions();
  }

}

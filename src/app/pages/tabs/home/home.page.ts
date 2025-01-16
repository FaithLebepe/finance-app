import { Component, OnInit } from '@angular/core';
import {  DatePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicSlides } from '@ionic/angular/standalone';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [ IonicModule, DatePipe]
})
export class HomePage implements OnInit {

  SwiperModules = [IonicSlides];
  accounts: any[] = [];
  currency = 'R';
  features: any[] = [];
  transactions: any[] = [];


  constructor() {
 
   }


  ngOnInit() {
    this.accounts = [
      {id: 1, acc_no: '57868945098', balance: '200000'},
      {id: 1, acc_no: '86930683728', balance: '50000'},
      {id: 1, acc_no: '20395847383', balance: '80000'}
    ];

    this.features = [
      {id: 1, color: 'tertiary', icon: 'paper-plane-outline', name: 'Send'},
      {id: 2, color: 'white', icon: 'send-outline', name: 'Request'},
      {id: 3, color: 'success', icon: 'add-circle-outline', name: 'Top-up'},
      {id: 3, color: 'light', icon: 'newspaper-outline', name: 'Bills'},
      {id: 5, color: 'warning', icon: 'card-outline', name: 'Cards'},
    ];

    this.transactions = [
      {id: 1, to: 'Amara Robertson', date: '2025-05-22', amount: 5000},
      {id: 2, to: 'Alora King', date: '2025-04-12', amount: 7000},
      {id: 3, to: 'Faith Work', date: '2025-11-02', amount: -335},
      {id: 4, to: 'John Cane', date: '2025-02-29', amount: 100},
      {id: 5, to: 'Lavaria Saw', date: '2025-07-11', amount: -200},
    ]
  }



}

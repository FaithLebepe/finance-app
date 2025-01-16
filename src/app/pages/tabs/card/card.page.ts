import { Component, OnInit } from '@angular/core';
import {IonicModule} from '@ionic/angular';
import { IonicSlides } from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonicModule]
})
export class CardPage implements OnInit {

  SwiperModules = [IonicSlides];
  cards:any[] = [];
  constructor() { }

  ngOnInit() {
    this.cards = [
      {id: 1, company_img: 'assets/imgs/mastercard.png', card_no: '1509 7658 8765 6453', card_holder: 'Faith King', exp_date: '08/29'},
      {id: 1, company_img: 'assets/imgs/visa.png', card_no: '4567 8765 6758 6578', card_holder: 'Faith King', exp_date: '11/09'},
      {id: 1, company_img: 'assets/imgs/mastercard.png', card_no: '9864 4673 6484 7346', card_holder: 'Faith King', exp_date: '03/01'},
    ];
  }

}

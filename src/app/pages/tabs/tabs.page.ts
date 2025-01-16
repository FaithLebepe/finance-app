import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule, IonTabs } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { addCircleOutline, arrowUpRightBoxOutline, cardOutline, heartOutline, homeOutline, newspaperOutline, paperPlaneOutline, pieChartOutline, sendOutline, settingsOutline }from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class TabsPage implements OnInit {
  
  selectedTab: any
  @ViewChild('tabs') tabs!: IonTabs;

  constructor() { 
    addIcons({ homeOutline, cardOutline, pieChartOutline, settingsOutline, sendOutline, paperPlaneOutline,newspaperOutline, addCircleOutline  });
  }

  ngOnInit() {
  }

  setCurrentTab() {
    this.selectedTab = this.tabs.getSelected();
    console.log(this.selectedTab);
  }

}

import { Component, OnInit } from '@angular/core';
import { IonicModule} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { fingerPrintOutline, helpBuoyOutline, keyOutline, logOutOutline, notificationsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class SettingsPage implements OnInit {

  constructor() {
    addIcons({notificationsOutline,
      fingerPrintOutline,
      keyOutline,
      helpBuoyOutline,
      logOutOutline
    })
   }

  ngOnInit() {
  }

}

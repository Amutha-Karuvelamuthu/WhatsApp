import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle,IonButtons,IonList, IonToolbar,IonBackButton,IonButton,IonIcon,IonListHeader,IonAvatar,IonLabel,IonItem,IonText } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { search, checkmarkDone, qrCodeOutline, add, key, lockClosedOutline, heartOutline, chatboxOutline, notificationsOutline, peopleOutline, addCircleOutline, helpCircleOutline, logoInstagram, logoFacebook, globeOutline, personCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader,IonList, IonButtons,IonBackButton,IonButton,IonIcon,IonListHeader,IonAvatar,IonLabel, IonItem,IonText, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SettingsPage implements OnInit {

  constructor() { 
    addIcons({search,qrCodeOutline,personCircleOutline,addCircleOutline,key,lockClosedOutline,heartOutline,chatboxOutline,notificationsOutline,globeOutline,helpCircleOutline,peopleOutline,logoInstagram,logoFacebook,add,checkmarkDone});
  }

  ngOnInit() {
  }

}

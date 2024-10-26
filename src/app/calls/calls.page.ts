import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonIcon, IonButton, IonList, IonListHeader, IonItem, IonLabel, IonText, IonAvatar, IonNote, IonItemDivider, IonFabButton, IonFab } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart, qrCodeOutline, cameraOutline, ellipsisVertical, videocamOutline, lockClosedOutline } from 'ionicons/icons';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.page.html',
  styleUrls: ['./calls.page.scss'],
  standalone: true,
  imports: [IonFab, IonFabButton, IonItemDivider, IonNote, IonAvatar, IonText, IonLabel, IonItem, IonListHeader, IonList, IonButton, IonIcon, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CallsPage implements OnInit {

  constructor() { 
    addIcons({qrCodeOutline,cameraOutline,ellipsisVertical,heart,videocamOutline,lockClosedOutline});
  }
  recent:any[] =[
    { name:"Shay Rich",img:"../assets/images/profile1.jpeg",date:"12:37 pm",status:true, received:false,times:"(2)"},
    { name:"Miller Gardner",img:"../assets/images/profile3.jpeg",date:"9:00 am",status:false,received:true},
    { name:"Jake Golden",img:"../assets/images/profile4.jpeg",date:"8:00 am",status:false,received:true},
    { name:"Alice Peck",img:"../assets/images/profile2.jpeg",date:"7:30 am",status:false,received:true},
    { name:"Cadence Bell",img:"../assets/images/profile5.jpeg",date:"Yesterday",status:true,times:"(1)",received:false},
    { name:"Shay Rich",img:"../assets/images/profile1.jpeg",date:"12:37 pm",status:true, received:false,times:"(2)"},
    { name:"Miller Gardner",img:"../assets/images/profile3.jpeg",date:"9:00 am",status:false,received:true},
    { name:"Jake Golden",img:"../assets/images/profile4.jpeg",date:"8:00 am",status:false,received:true},
    { name:"Alice Peck",img:"../assets/images/profile2.jpeg",date:"7:30 am",status:false,received:true},
    { name:"Cadence Bell",img:"../assets/images/profile5.jpeg",date:"Yesterday",status:true,times:"(1)",received:false},
      ]
  ngOnInit() {
  }

}

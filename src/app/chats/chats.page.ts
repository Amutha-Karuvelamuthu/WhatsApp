import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonSearchbar, IonButton, IonList, IonItem, IonAvatar, IonButtons, IonLabel, IonChip, IonText, IonNote, IonBadge, IonFab, IonFabButton, IonImg } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { camera,  cameraOutline, ellipsisVertical, checkmarkDone, pencil, qrCodeOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'chats.page.html',
  styleUrls: ['chats.page.scss'],
  standalone: true,
  imports: [IonImg, IonFabButton, IonFab, CommonModule,IonBadge, IonNote, IonText, IonChip, IonLabel, IonButtons, IonAvatar, IonItem, IonList, IonButton, IonSearchbar, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class ChatsPage {
  
  constructor() {
    addIcons({qrCodeOutline,cameraOutline,ellipsisVertical,checkmarkDone,camera,pencil});
  }
contacts:any[] =[
    { name:"Shay Rich",img:"../assets/images/profile1.jpeg",msg:"Good morning",date:"7:37 am",status:true,badge:"2"},
    { name:"Miller Gardner",img:"../assets/images/profile3.jpeg",msg:"What's going on?",date:"Yesterday",status:false,checkmark:true},
    { name:"Jake Golden",img:"../assets/images/profile4.jpeg",msg:"Just finished a good book. Got any recommendations?",date:"Yesterday",status:false},
    { name:"Alice Peck",img:"../assets/images/profile2.jpeg",msg:"Can’t believe it’s already Friday! Any plans for the weekend?",date:"24/10/24",status:false},
    { name:"Cadence Bell",img:"../assets/images/profile5.jpeg",msg:"Ok",date:"24/10/24",status:true,badge:"1",checkmark:true},
    { name:"Shay Rich",img:"../assets/images/profile1.jpeg",msg:"Good morning",date:"22/10/24",status:true,badge:"2"},
    { name:"Miller Gardner",img:"../assets/images/profile2.jpeg",msg:"Good morning",date:"20/10/24",status:false,checkmark:true},
    { name:"Jake Golden",img:"../assets/images/profile3.jpeg",msg:"Good morning",date:"04/09/24",status:false},
    { name:"Alice Peck",img:"../assets/images/profile4.jpeg",msg:"I saw a meme that totally reminded me of you! 😂",date:"04/09/24",status:false,checkmark:true},
    { name:"Cadence Bell",img:"../assets/images/profile5.jpeg",msg:"Good morning",date:"04/09/24",status:true,badge:"1"},

  ]
}

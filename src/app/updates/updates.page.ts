import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonAvatar, IonBadge, IonItem, IonLabel, IonText, IonList, IonAccordion, IonAccordionGroup, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { camera, cameraOutline, ellipsisVertical, search, pencil, qrCodeOutline, add } from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import { BannerComponent } from "../banner/banner.component";

@Component({
  selector: 'app-tab2',
  templateUrl: 'updates.page.html',
  styleUrls: ['updates.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonFab, IonAccordionGroup, IonAccordion, CommonModule, IonList, IonText, IonLabel, IonItem, IonBadge, IonAvatar, IonIcon, IonButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, BannerComponent]
})
export class UpdatesPage {
  slides:any[]=[]
  constructor() {
    addIcons({qrCodeOutline,cameraOutline,search,ellipsisVertical,add,pencil,camera});
    this.slides=[
      {
        banner:"../assets/images/whatsapp2.jpeg",
        name:"WhatsApp"
      },
      {
        banner:"../assets/images/amala-shaji.jpeg",
        name:"Amala Shaji"
      },
      {
        banner:"../assets/images/news-18.jpeg",
        name:"News 18 India"
      },
      {
        banner:"../assets/images/career.jpg",
        name:"Career Will App"
      },
      {
        banner:"../assets/images/rcb.jpeg",
        name:"RCB"
      },
      {
        banner:"../assets/images/download.png",
        name:"Star Sports 1"
      }
    ]
  }
  recent:any[] =[
    { name:"Shay Rich",img:"../assets/images/profile1.jpeg",msg:"Good morning",date:"12:37 pm",status:true,badge:"2"},
    { name:"Miller Gardner",img:"../assets/images/profile3.jpeg",msg:"What's going on?",date:"9:00 am",status:false,checkmark:true},
    { name:"Jake Golden",img:"../assets/images/profile4.jpeg",msg:"Just finished a good book. Got any recommendations?",date:"8:00 am",status:false},
    { name:"Alice Peck",img:"../assets/images/profile2.jpeg",msg:"Can’t believe it’s already Friday! Any plans for the weekend?",date:"7:30 am",status:false},
    { name:"Cadence Bell",img:"../assets/images/profile5.jpeg",msg:"Ok",date:"Yesterday",status:true,badge:"1",checkmark:true},
      ]
  viewed:any[]=[
    { name:"Shay Rich",img:"../assets/images/profile1.jpeg",msg:"Good morning",date:"8.46 am",status:true,badge:"2"},
    { name:"Miller Gardner",img:"../assets/images/profile2.jpeg",msg:"Good morning",date:"8:00 am",status:false,checkmark:true},
    { name:"Jake Golden",img:"../assets/images/profile3.jpeg",msg:"Good morning",date:"Yesterday",status:false},
    { name:"Alice Peck",img:"../assets/images/profile4.jpeg",msg:"I saw a meme that totally reminded me of you! 😂",date:"Yesterday",status:false,checkmark:true},
    { name:"Cadence Bell",img:"../assets/images/profile5.jpeg",msg:"Good morning",date:"Yesterday",status:true,badge:"1"},
  ]

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonButton,IonLabel, IonList, IonButtons,IonFooter, IonTabs,IonTabBar,IonTabButton,IonInput, IonIcon, IonHeader,IonBackButton, IonTitle, IonToolbar,IonAvatar,IonItem } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { addIcons } from 'ionicons';
import { callOutline, ellipsisVertical, videocamOutline, happy, linkOutline, camera, micOutline, happyOutline, attachOutline } from 'ionicons/icons';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.page.html',
  styleUrls: ['./chat-detail.page.scss'],
  standalone: true,
  imports: [IonContent,IonButton,IonList,IonLabel, IonButtons,IonFooter, IonTabs,IonTabBar,IonTabButton,IonInput, IonIcon, IonBackButton, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonAvatar,IonItem]
})
export class ChatDetailPage implements OnInit {
  contactName!:any;
  contactImg!:any;

  constructor(private route:ActivatedRoute) { 
    addIcons({videocamOutline,callOutline,ellipsisVertical,happyOutline,attachOutline,camera,micOutline,linkOutline,happy});
  }

  ngOnInit() {
    this.contactName = this.route.snapshot.paramMap.get('name');
    this.contactImg =  this.route.snapshot.paramMap.get('img');
  
  }


}

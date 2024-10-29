import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonAvatar,IonItem } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.page.html',
  styleUrls: ['./chat-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonAvatar,IonItem]
})
export class ChatDetailPage implements OnInit {
  contactName!:any;
  contactImg!:any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.contactName = this.route.snapshot.paramMap.get('name');
    this.contactImg =  this.route.snapshot.paramMap.get('img');
  
  }


}

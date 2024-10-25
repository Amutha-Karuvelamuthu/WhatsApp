import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonIcon, IonButton, IonList, IonListHeader, IonItem, IonLabel, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.page.html',
  styleUrls: ['./calls.page.scss'],
  standalone: true,
  imports: [IonText, IonLabel, IonItem, IonListHeader, IonList, IonButton, IonIcon, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CallsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

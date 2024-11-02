import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonThumbnail,IonHeader,IonPopover, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonIcon, IonCard, IonAvatar, IonBadge, IonItem, IonLabel, IonList, IonText, IonNote } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { qrCodeOutline, cameraOutline, ellipsisVertical, chevronForwardOutline, add } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'communities.page.html',
  styleUrls: ['communities.page.scss'],
  standalone: true,
  imports: [IonThumbnail,IonNote, IonText, IonList,IonPopover,RouterLink, IonLabel, IonItem, IonBadge, IonAvatar, IonCard, IonIcon, IonButtons, IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class CommunitiesPage {
  constructor() {
    addIcons({qrCodeOutline,cameraOutline,ellipsisVertical,add,chevronForwardOutline});
  }
}

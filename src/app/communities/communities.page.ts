import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonIcon, IonCard, IonAvatar } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { addIcons } from 'ionicons';
import { qrCodeOutline, cameraOutline, ellipsisVertical } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'communities.page.html',
  styleUrls: ['communities.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonCard, IonIcon, IonButtons, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class CommunitiesPage {
  constructor() {
    addIcons({qrCodeOutline,cameraOutline,ellipsisVertical});
  }
}

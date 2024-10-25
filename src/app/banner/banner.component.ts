import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular'
import { register } from "swiper/element/bundle"
register()
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  standalone:true,
  imports : [
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent  implements OnInit {
  @Input() slides:any=[];
  swiperModules = [IonicSlides];
  constructor() { }

  ngOnInit() {}

}

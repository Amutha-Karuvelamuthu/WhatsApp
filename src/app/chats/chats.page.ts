import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { IonHeader,IonListHeader,IonRow, IonCol,IonModal, IonSelectOption,IonSelect,IonPopover, IonToolbar, IonTitle, IonContent, IonIcon, IonSearchbar, IonButton, IonList, IonItem, IonAvatar, IonButtons, IonLabel, IonChip, IonText, IonNote, IonBadge, IonFab, IonFabButton, IonImg, IonItemDivider, IonInput } from '@ionic/angular/standalone';
import { camera,  cameraOutline, ellipsisVertical, checkmarkDone, pencil, qrCodeOutline, lockClosedOutline, archive, archiveOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { CommonModule } from '@angular/common';
import Lottie from 'lottie-web';
import { Router, RouterLink } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera'



@Component({
  selector: 'app-tab1',
  templateUrl: 'chats.page.html',
  styleUrls: ['chats.page.scss'],
  standalone: true,
  imports: [RouterLink,IonModal, IonCol,IonRow, IonInput,IonSelectOption, IonListHeader,IonPopover,IonSelect, IonItemDivider, IonImg, IonFabButton, IonFab, CommonModule,IonBadge, IonNote, IonText, IonChip, IonLabel, IonButtons, IonAvatar, IonItem, IonList, IonButton, IonSearchbar, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class ChatsPage implements AfterViewInit {
  @ViewChild('metaAI',{static:true}) metaAI!:ElementRef<HTMLDivElement>
  picture:any;
  isPicture:boolean=false;
  savedImageUri: any;
  constructor(private router:Router) {
    addIcons({qrCodeOutline,cameraOutline,ellipsisVertical,archiveOutline,checkmarkDone,lockClosedOutline,camera,pencil});
  }
contacts:any[] =[
    { name:"Shay",img:"../assets/images/profile1.jpeg",msg:"Good morning",date:"7:37 am",status:true,badge:"2"},
    { name:"Gardner",img:"../assets/images/profile3.jpeg",msg:"What's going on?",date:"Yesterday",status:false,checkmark:true},
    { name:"Golden",img:"../assets/images/profile4.jpeg",msg:"Just finished a good book. Got any recommendations?",date:"Yesterday",status:false},
    { name:"Alice ",img:"../assets/images/profile2.jpeg",msg:"Can’t believe it’s already...",date:"24/10/24",status:false},
    { name:"Cadence",img:"../assets/images/profile5.jpeg",msg:"Ok",date:"24/10/24",status:true,badge:"1",checkmark:true},
    { name:"Chan",img:"../assets/images/profile6.jpeg",msg:" Any plans for the weekend?",date:"22/10/24",status:true,badge:"2"},
    { name:"Mill",img:"../assets/images/profile7.jpeg",msg:"Good morning",date:"20/10/24",status:false,checkmark:true},
    { name:"Jake ",img:"../assets/images/profile8.png",msg:"Good morning",date:"04/09/24",status:false},
    { name:"Peck",img:"../assets/images/profile9.jpeg",msg:"I saw a meme ",date:"04/09/24",status:false,checkmark:true},
    { name:"Rihana",img:"../assets/images/profile10.jpeg",msg:"Good morning",date:"04/09/24",status:true,badge:"1"},
    { name:"Bell",img:"../assets/images/profile11.png",msg:"Ok",date:"24/10/24",status:true,badge:"1",checkmark:true},
    { name:"Richard",img:"../assets/images/profile12.png",msg:"Good morning",date:"22/10/24",status:true,badge:"2"},
    // { name:"Miller",img:"../assets/images/profile2.jpeg",msg:"Good morning",date:"20/10/24",status:false,checkmark:true},
    // { name:"Jack",img:"../assets/images/profile3.jpeg",msg:"Good morning",date:"04/09/24",status:false},
    // { name:"Alice",img:"../assets/images/profile4.jpeg",msg:"I saw a meme ",date:"04/09/24",status:false,checkmark:true},
    // { name:"Cadence ",img:"../assets/images/profile5.jpeg",msg:"Good morning",date:"04/09/24",status:true,badge:"1"},

  ]
  ngAfterViewInit(): void {
    const container = this.metaAI.nativeElement
    Lottie.loadAnimation({
      container:container,
      renderer:'svg',
      loop:true,
      autoplay:true,
      path:"../../assets/Animation - 1729927228236.json"
    })
  }
  navigateToChat(contact:any){
    this.router.navigate(['/chat',contact.name,contact.img])
  }
  async takePicture(){
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: undefined,
      resultType:CameraResultType.DataUrl
    })
    this.isPicture = !this.isPicture
    this.picture = image.dataUrl;
    // this.savedImageUri = await this.saveImage(image);
    // console.log('Saved Image URI:', this.savedImageUri);
    
  }
  // async saveImage(image:any){
  //   const fileName = new Date().getTime() + '.jpeg';
  //   const base64Data = await this.readAsBase64(image);
  //   const fileSaved = await Filesystem.writeFile({
  //     path: fileName,
  //     data:base64Data,
  //     directory:Directory.Data
  //   })
  //   return fileSaved.uri
  // }
  // async readAsBase64(image:any){
  //   const response = await fetch(image.webPath);
  //   const blob = await response.blob();
  //   const reader = new FileReader();
  //   return new Promise<string>((resolve =>{
  //     reader.onloadend = () =>{
  //       const base64String = reader.result as string;
  //       resolve(base64String.split(',')[1])
  //     };
  //     reader.readAsDataURL(blob)
  //   }))
  // }
  // async loadImage(){
  //     this.picture=this.savedImageUri
  // }
  // async startscan(){
  //   try{
  //     const barcode = await CapacitorBarcodeScanner.scanBarcode({
  //       hint: 17,
  //       cameraDirection: 1
  //     })
  //   console.log(barcode);
  //   return barcode.ScanResult;
    
  //   }catch(e){
  //     throw(e)
  //   }
  // }
}

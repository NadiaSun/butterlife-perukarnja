import { Component, ElementRef, HostListener} from '@angular/core';
import { CatalogService } from '../shared/catalog.service';
import { PopupService } from '../shared/popup.service';


@Component({
  selector: 'app-popup-card',
  templateUrl: './popup-card.component.html',
  styleUrls: ['./popup-card.component.css']
})
export class PopupCardComponent {

  constructor(public catalogService: CatalogService, public popupService: PopupService) {
    
  }
  public fullImgStatus: boolean = false;
  windowT: number = window.screenTop;
  
  popupQuRen: boolean = false;
  popupQuRes: boolean = false;
  
  public get scroll(): boolean {
    console.log(this.windowT)
    console.log(window.screenTop)
    if (this.windowT !== window.screenTop) {
      this.windowT = window.screenTop
      return true
    } else {
      return false
    }
  }

  closePopup(event: Event) {
    const $event = event.target as HTMLTemplateElement
    if ($event.classList.contains('close')) {
      this.popupService.closePopup('card')
    }
  }

  closeQu(event: Event) {
    const t: HTMLElement = event.target as HTMLElement;
    if(!t.classList.contains('qu')){
      this.popupQuRen = false;
      this.popupQuRes = false;
    }
  }

  onClickBtn(event: Event) {
    const t: HTMLElement = event.target as HTMLElement;
    console.log(this.popupQuRen)
    if(t.classList.contains('qu')) {
      if(t.id === 'ren') {
        this.popupQuRen = !this.popupQuRen;
      }
      
      if(t.id === 'res') {
        this.popupQuRes = !this.popupQuRes;
      }
    } else {
      this.popupService.openMessenger(this.popupService.card)
    }
  }
}

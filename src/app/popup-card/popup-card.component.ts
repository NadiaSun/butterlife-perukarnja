import { Component} from '@angular/core';
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
        this.popupQuRes = false;
      }
      
      if(t.id === 'res') {
        this.popupQuRes = !this.popupQuRes;
        this.popupQuRen = false;
      }
    } else if (t.classList.contains('qu-popup') || t.classList.contains('qu-text')) {
      this.popupQuRen = false;
      this.popupQuRes = false;
    } else {
      this.popupService.openMessenger(this.popupService.card)
    }
  }
}

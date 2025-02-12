import { AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import { CatalogService } from '../shared/catalog.service';
import { PopupService } from '../shared/popup.service';


@Component({
  selector: 'app-popup-card',
  templateUrl: './popup-card.component.html',
  styleUrls: ['./popup-card.component.css']
})
export class PopupCardComponent{
  private popupScroll: ElementRef | undefined;
  windowT: number = window.screenTop;

  popupQuRen: boolean = false;
  popupQuRes: boolean = false;
  status: boolean = false;

  @ViewChild('scrollPopup', { static: false }) set content(content: ElementRef) {
    if(content) {
      this.popupScroll = content
    } else {
      this.popupScroll = undefined
      this.status = false
    }
  };
  
  

  constructor(public catalogService: CatalogService,
    public popupService: PopupService) {}

  closePopup(event: Event) {
    const $event = event.target as HTMLTemplateElement
    if ($event.classList.contains('close')) {
      this.popupService.closePopup('card')
      this.popupQuRen = false;
      this.popupQuRes = false;
    }
  }

  closeQu(event: Event) {
    const t: HTMLElement = event.target as HTMLElement;
    if(!t.classList.contains('qu')){
      this.popupQuRen = false;
      this.popupQuRes = false;
    }
  }

  onClickBtn(event: Event, rental: 'rent' | 'reservation') {
    const t: HTMLElement = event.target as HTMLElement;
    if(t.classList.contains('qu')) {
      if(t.id === 'ren') {
        this.popupQuRen = !this.popupQuRen;
        this.popupQuRes = false;
      }
      
      if(t.id === 'res') {
        this.popupQuRes = !this.popupQuRes;
        this.popupQuRen = false;
      }
    } else if (t.classList.contains('qu-popup') || t.classList.contains('qu-text') || t.classList.contains('qu-close')) {
      this.popupQuRen = false;
      this.popupQuRes = false;
    } else {
      this.popupService.openMessenger(this.popupService.card)
      this.popupService.rental = rental
    }
  }

  
  @HostListener('window:keydown.arrowdown', ['$event'])
  scrollEvent(event: KeyboardEvent) {
    if(this.popupScroll) {
      event.preventDefault()
      this.popupScroll.nativeElement.scrollBy(0, 50)
    }
  }

  @HostListener('window:keydown.arrowup', ['$event'])
  scrollEventUp(event: KeyboardEvent) {
    if(this.popupScroll) {
      event.preventDefault()
      this.popupScroll.nativeElement.scrollBy(0, -50)
    }
  }
}
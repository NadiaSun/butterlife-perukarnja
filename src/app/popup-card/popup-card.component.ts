import { Component, ElementRef} from '@angular/core';
import { CatalogService } from '../shared/catalog.service';
import { PopupService } from '../shared/popup.service';

@Component({
  selector: 'app-popup-card',
  templateUrl: './popup-card.component.html',
  styleUrls: ['./popup-card.component.css']
})
export class PopupCardComponent {
  public fullImgStatus: boolean = false;

  constructor(public catalogService: CatalogService, public popupService: PopupService) {
    
  }

  closePopup(event: Event) {
    const $event = event.target as HTMLTemplateElement
    if ($event.classList.contains('close')) {
      this.popupService.closePopup('card')
    }
  }
}

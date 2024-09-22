import { Component, ContentChildren } from '@angular/core';
import { PopupService } from '../shared/popup.service';

@Component({
  selector: 'app-popup-card',
  templateUrl: './popup-card.component.html',
  styleUrls: ['./popup-card.component.css']
})
export class PopupCardComponent {
  constructor(public popupService: PopupService) {}

  closePopup(event: Event) {
    const $event = event.target as HTMLTemplateElement
    if ($event.classList.contains('close')) {
      this.popupService.editPopup()
    }
  }
}

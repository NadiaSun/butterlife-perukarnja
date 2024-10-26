import { Component } from '@angular/core';
import { PopupService } from '../shared/popup.service';
import { Card } from '../shared/interfaces';
import { CatalogService } from '../shared/catalog.service';

@Component({
  selector: 'app-popup-messenger',
  templateUrl: './popup-messenger.component.html',
  styleUrls: ['./popup-messenger.component.css']
})
export class PopupMessengerComponent {
  card!: Card;

  constructor(public popupService: PopupService, public catalogService: CatalogService) {
  }
}

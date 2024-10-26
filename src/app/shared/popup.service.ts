import { Injectable } from '@angular/core';
import { Card } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  public card!: Card;
  popupCard: boolean = false;
  popupMessenger: boolean = false;

  constructor() { }

  openCard(card: Card) {
    this.popupCard = true;
    this.card = card;
  }

  openMessenger(card: Card) {
    this.popupMessenger = true;
    this.card = card;
  }

  closePopup(value: 'messenger' | 'card') {
    if(value === 'messenger') {
      this.popupMessenger = false;
    } else if(value === 'card') {
      this.popupCard = false;
    }
  }
}

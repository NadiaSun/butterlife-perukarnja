import { Injectable } from '@angular/core';
import { Card } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  public card!: Card;
  popupCard: boolean = false;
  popupMessenger: boolean = false;
  popupMessengerTwo: boolean = false;

  constructor() { }

  openCard(card: Card) {
    this.popupCard = true;
    this.card = card;
  }

  openMessenger(card: Card) {
    this.popupMessenger = true;
    this.card = card;
  }

  openMessengerTwo() {
    this.popupMessengerTwo = true;
  }

  closePopup(value: 'messenger' | 'card' | 'messengerTwo') {
    if(value === 'messenger') {
      this.popupMessenger = false;
    } else if(value === 'card') {
      this.popupCard = false;
    } else if(value === 'messengerTwo') {
      this.popupMessengerTwo = false;
    }
  }
}

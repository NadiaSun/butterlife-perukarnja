import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  popupStatus: boolean = false;
  popupImg: string = ''

  constructor() { }

  editPopup(img?: string) {
    if (img) {
      this.popupStatus = true;
      this.popupImg = img;
    } else {
      this.popupStatus = false;
      this.popupImg = '';
    }
    
  }

  getSrc(img?: string): string {
    if (img) {
      return "../assets/img/" + img + '.jpg'
    }
    return "../assets/img/" + this.popupImg + '.jpg'
  }
}

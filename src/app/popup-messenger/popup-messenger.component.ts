import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PopupService } from '../shared/popup.service';
import { Card, Email } from '../shared/interfaces';
import { CatalogService } from '../shared/catalog.service';
import { EmailService } from '../shared/email.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorName } from '../shared/form.validator';

@Component({
  selector: 'app-popup-messenger',
  templateUrl: './popup-messenger.component.html',
  styleUrls: ['./popup-messenger.component.css']
})
export class PopupMessengerComponent implements OnInit {
  @ViewChild('popupMessage', {static: false}) popupMessage: ElementRef;
  card!: Card;
  form: FormGroup;
  status: boolean = false;
  startMouse: number = 0
  get height(): number {
    return window.innerHeight
  }
  constructor(
    public popupService: PopupService,
    public catalogService: CatalogService,
    private emailService: EmailService) {
  }
  get hrefViber(): string  {
    return `viber://chat?number=%2B380975760466&draft=%D0%94%D0%BE%D0%B1%D1%80%D0%BE%D0%B3%D0%BE%20%D0%B4%D0%BD%D1%8F!%20%D0%97%D0%B2%D0%B5%D1%80%D1%82%D0%B0%D1%8E%D1%81%D1%8F%20%D0%B7%20${this.popupService.rental === 'rent' ? '%D0%BE%D1%80%D0%B5%D0%BD%D0%B4%D0%B8' : '%D0%B1%D1%80%D0%BE%D0%BD%D1%8E%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F'}%20%D1%81%D0%B0%D0%B9%D1%82%D1%83%20-%20${this.popupService.card.id}`
  }
  get hrefWhatsApp(): string  {
    return `https://wa.me/380975760466?text=%D0%94%D0%BE%D0%B1%D1%80%D0%BE%D0%B3%D0%BE%20%D0%B4%D0%BD%D1%8F!%20%D0%97%D0%B2%D0%B5%D1%80%D1%82%D0%B0%D1%8E%D1%81%D1%8F%20%D0%B7%20${this.popupService.rental === 'rent' ? '%D0%BE%D1%80%D0%B5%D0%BD%D0%B4%D0%B8' : '%D0%B1%D1%80%D0%BE%D0%BD%D1%8E%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F'}%20%D1%81%D0%B0%D0%B9%D1%82%D1%83%20-%20${this.popupService.card.id}`
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required, ValidatorName
      ]),
      phone: new FormControl(null, Validators.required)
    })
  }

  sendEmail(rentalSite?: string) {
    if (this.form.invalid) {
      this.form.touched
      return
    }
    console.log(this.form)
    const data: Email = {
      name:  this.form.value.name,
      from_email: 'whitefox1331@gmail.com',
      id_site: this.popupService.card.id,
      rental: this.popupService.rental,
      width: `${window.innerWidth}`,
      phone:  this.form.value.phone ? `${this.form.value.phone.internationalNumber}` : '',
    }

    this.status = true

    this.emailService.sendEmail(data).then(() => {
      this.popupService.card.status = true;
      this.form.reset()
    })
    .catch(() => {
    this.status = false
    });
  }
  scroll(value: number) {
    
    this.startMouse += value;
    if(this.startMouse > 0) {
      this.startMouse = 0
    }
    if(this.startMouse <= -360) {
      this.startMouse = -360
    }
    this.popupMessage.nativeElement.style.transform = `translateY(${this.startMouse}px)`
  }

  closePopup() {
    this.startMouse = 0
    this.popupService.closePopup('messenger')
  }
}
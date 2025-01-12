import { Component, OnInit } from '@angular/core';
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
  card!: Card;
  form: FormGroup;
  status: boolean = false;

  constructor(
    public popupService: PopupService,
    public catalogService: CatalogService,
    private emailService: EmailService) {
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
}

import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { Email } from './interfaces';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private serviceId = 'service_yee0r9s';
  private templateId = 'template_sxcz8wf';
  private publicKey = 'kd9UiiSXGa5kr_mKW';

  constructor() { }

  sendEmail(formData: Email): Promise<any> {
    return emailjs.send(this.serviceId, this.templateId, formData, this.publicKey);
  }
}

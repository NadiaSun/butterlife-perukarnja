import { Component } from '@angular/core';
import { PopupService } from '../shared/popup.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent {
  constructor(public popupService: PopupService) {

  }
}

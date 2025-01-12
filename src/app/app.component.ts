import { Component, OnInit } from '@angular/core';
import { Card } from './shared/interfaces';
import { CatalogService } from './shared/catalog.service';
import { PopupService } from './shared/popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public popupService: PopupService) {}
  ngOnInit(): void {
  }
}

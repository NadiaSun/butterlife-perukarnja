import { Component, ElementRef, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';

import { PopupService } from './shared/popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {
  @ViewChild('app', {static: false}) app!: ElementRef;
  appDiv: ElementRef;
  
  constructor(public popupService: PopupService, private cdr: ChangeDetectorRef) {}
  ngAfterViewInit(): void {
    this.appDiv = this.app;
    this.cdr.detectChanges();
  }
}
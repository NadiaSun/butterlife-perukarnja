import {Component, ElementRef, Input, OnInit } from '@angular/core';
import { CatalogService } from '../shared/catalog.service';
import { PopupService } from '../shared/popup.service';
import { Router } from '@angular/router';
import { Card } from '../shared/interfaces';


@Component({
  selector: 'app-catalog-content',
  templateUrl: './catalog-content.component.html',
  styleUrls: ['./catalog-content.component.css']
})
export class CatalogContentComponent implements OnInit {
  @Input() app: ElementRef | undefined;
  test: any = window.innerWidth
  status: boolean = false;
  end: number = 15;
  start: number = 0;
  clickBtn: boolean = false;

  constructor(
    public catalogService: CatalogService,
    public popupService: PopupService,
    public route: Router
  ) {}
  ngOnInit(): void {
    setTimeout(()=> {
      this.status = true
    }, 400)
  }

  slowDownload(){
    this.status = false
    setTimeout(()=> {
      this.status = true
    }, 800)
  }

  BackNextButton(num: number) {
    this.clickBtn = true
    this.start += num
    this.end += num
    this.clickBtn = false
    if(this.app) {
      this.app.nativeElement.scrollTo(0, 0)
    }
  }
}
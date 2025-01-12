import {Component, OnInit } from '@angular/core';
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
  test: any = window.innerWidth
  status: boolean = false;
  end: number = 6

  constructor(
    public catalogService: CatalogService,
    public popupService: PopupService,
    public route: Router
  ) {}
  ngOnInit(): void {
    setTimeout(()=> {
      this.status = true
    }, 800)
    
    setTimeout(()=> {
      this.end = 100
    }, 2000)
  }

  slowDownload(){
    this.status = false
    setTimeout(()=> {
      this.status = true
    }, 800)
  }

}

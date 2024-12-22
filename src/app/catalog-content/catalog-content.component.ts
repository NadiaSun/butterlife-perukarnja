import { AfterContentInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CatalogService } from '../shared/catalog.service';
import { PopupService } from '../shared/popup.service';
import { Category } from '../shared/interfaces';
import { Router } from '@angular/router';


@Component({
  selector: 'app-catalog-content',
  templateUrl: './catalog-content.component.html',
  styleUrls: ['./catalog-content.component.css']
})
export class CatalogContentComponent implements OnInit {
  test: any = window.innerWidth
  status: boolean = false;

  constructor(
    public catalogService: CatalogService,
    public popupService: PopupService,
    public route: Router
  ) {}
  ngOnInit(): void {
    setTimeout(()=> {
      this.status = true
    }, 800)
  }

  slowDownload(){
    this.status = false
    setTimeout(()=> {
      this.status = true
    }, 800)
  }

}

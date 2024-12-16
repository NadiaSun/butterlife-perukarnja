import { Component, EventEmitter, Output } from '@angular/core';
import { CatalogService } from '../shared/catalog.service';
import { PopupService } from '../shared/popup.service';
import { Category } from '../shared/interfaces';


@Component({
  selector: 'app-catalog-content',
  templateUrl: './catalog-content.component.html',
  styleUrls: ['./catalog-content.component.css']
})
export class CatalogContentComponent {
  test: any = window.innerWidth

  constructor(
    public catalogService: CatalogService,
    public popupService: PopupService
  ) {}

}

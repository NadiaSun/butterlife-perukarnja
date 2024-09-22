import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogContentComponent } from './catalog-content/catalog-content.component';
import { PopupCardComponent } from './popup-card/popup-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    CatalogComponent,
    CatalogContentComponent,
    PopupCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

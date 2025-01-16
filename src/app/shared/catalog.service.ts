import { HostListener, Injectable, OnDestroy } from '@angular/core';
import { Card } from './interfaces';
import { Subject, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PopupService } from './popup.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  popup: boolean = false;
  public popup$: Subject<Card> = new Subject<Card>()
  card!: Card;
  sub!: Subscription;
  width: number = window.innerWidth;
  category: 'realty' = 'realty';

  constructor(private route: Router, private popupService: PopupService) {
  
  }

catalogRealty: Card[] = [{id: "ri_1", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_2", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_3", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_4", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_5", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_6", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_7", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_8", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_9", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_10", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_11", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_12", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_13", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_14", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_15", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_16", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_17", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_18", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_19", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_20", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_21", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_22", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_23", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_24", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_25", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_26", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_27", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_28", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_29", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_30", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_31", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_32", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_33", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_34", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_35", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_36", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_37", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_38", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_39", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri_40", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}]


public get catalog(): Card[] {
  // if(this.route.url === '/beautysalon') {
  //   this.category = 'beautysalon'
  //   return this.catalogBeautySalon
  // } else if (this.route.url === '/realty') {
  //   this.category = 'realty'
  //   return this.catalogRealty
  // }
  return this.catalogRealty
}

getCutSrcSet(img: string, format: '.png' | '.jpg') {
  // if(this.category === 'beautysalon') {
  //   return `../assets/img/${this.category}/383-cut/${img}${format}, 
  //   ../assets/img/${this.category}/600-cut/${img}_600${format} 3x`
  // }
  return `../assets/img/${this.category}/383-cut/${img}${format}`
}

getSrcSet(img: string, format: '.png' | '.jpg', big?: boolean): string {
  const w = window.innerWidth;
  if (w <= 479) {
    if(big) {
      return `../assets/img/${this.category}/818/${img}_818${format}, 
    ../assets/img/${this.category}/1151/${img}_1151${format} 2x, 
    ../assets/img/${this.category}/1920/${img}_1920${format} 3x`;
    }
    return `../assets/img/${this.category}/383/${img}_383${format}, 
    ../assets/img/${this.category}/818/${img}_818${format} 2x, 
    ../assets/img/${this.category}/1151/${img}_1151${format} 3x`;
  } else if (480 <= w && w <= 767) {
    if(big) {
      return `../assets/img/${this.category}/1151/${img}_1151${format}, 
    ../assets/img/${this.category}/1920/${img}_1920${format} 2x, 
    ../assets/img/${this.category}/1920/${img}_1920${format} 3x`;
    }
    return `../assets/img/${this.category}/818/${img}_818${format}, 
    ../assets/img/${this.category}/1151/${img}_1151${format} 2x, 
    ../assets/img/${this.category}/1920/${img}_1920${format} 3x`
  } else if (768 <= w && w <= 1023) {
    return `../assets/img/${this.category}/818/${img}_818${format}, 
    ../assets/img/${this.category}/1920/${img}_1920${format} 2x`
  } else if (1024 <= w && w <= 1349) {
    return `../assets/img/${this.category}/1151/${img}_1151${format}, 
    ../assets/img/${this.category}/1920/${img}_1920${format} 1.5x`
  } else if (1350 <= w && w <= 1439) {
    return `../assets/img/${this.category}/1151/${img}_1151${format}, 
    ../assets/img/${this.category}/1920/${img}_1920${format} 1.5x`
  } else if (1440 <= w && w <= 1919) {
    return `../assets/img/${this.category}/1920/${img}_1920${format}`
  } else if (1920 <= w && w <= 2560) {
    return `../assets/img/${this.category}/1920/${img}_1920${format}`
  }
  return `../assets/img/${this.category}/1920/${img}_1920${format}`
}


@HostListener('window:resize', ['$event'])
onResize() {
    console.log(window.innerWidth)
}

srcTelBot(id: string): string {
 return `https://tg.pulse.is/WebsiteRental_bot?start=678586f2e8716273530d6c75|id_site=${id}|rental=${this.popupService.rental}`
}

  closePopup() {
    this.popup = false;
  }

}

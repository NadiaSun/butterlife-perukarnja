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

catalogRealty: Card[] = [{id: "ri-1", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-2", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-3", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-4", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-5", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-6", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-7", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-8", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-9", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-10", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-11", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-12", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-13", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-14", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-15", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-16", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-17", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-18", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-19", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-20", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-21", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-22", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-23", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-24", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-25", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-26", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-27", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-28", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-29", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-30", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-31", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-32", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-33", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-34", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-35", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-36", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-37", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-38", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-39", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-40", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
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

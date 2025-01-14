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
  category: 'beautysalon' | 'realty' = 'beautysalon';

  constructor(private route: Router, private popupService: PopupService) {
  
  }


  // {id: "salon1", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg', status: false}
  catalogBeautySalon: Card[] = [{id: "salon2", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg', status: false
}, {id: "salon3", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg', status: false
}, {id: "salon4", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg', status: false
}, {id: "salon5", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg', status: false
}, {id: "salon6", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg', status: false
}, {id: "salon7", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg', status: false
}, {id: "salon8", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg', status: false
}, {id: "salon9", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg', status: false
}, {id: "salon10", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg', status: false
}, {id: "salon11", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg', status: false
}, {id: "salon12", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg', status: false
}, {id: "salon13", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg', status: false
}, {id: "salon14", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg', status: false
}, {id: "salon15", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg', status: false
}, {id: "salon16", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg', status: false
}, {id: "salon17", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg', status: false
}, {id: "salon18", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg', status: false
},

]

catalogRealty: Card[] = [{id: "ri-88", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-89", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-90", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-92", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-93", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-94", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-96", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-97", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-98", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-99", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-100", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-101", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-102", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-103", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}, {id: "ri-104", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png', status: false
}]


public get catalog(): Card[] {
  if(this.route.url === '/beautysalon') {
    this.category = 'beautysalon'
    return this.catalogBeautySalon
  } else if (this.route.url === '/realty') {
    this.category = 'realty'
    return this.catalogRealty
  }
  return this.catalogBeautySalon
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

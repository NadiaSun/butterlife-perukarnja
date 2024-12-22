import { HostListener, Injectable, OnDestroy } from '@angular/core';
import { Card } from './interfaces';
import { Subject, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private route: Router) {
  
  }


  // {id: "salon1", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg'}
  catalogBeautySalon: Card[] = [{id: "salon2", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg'
}, {id: "salon3", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg'
}, {id: "salon4", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg'
}, {id: "salon5", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg'
}, {id: "salon6", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg'
}, {id: "salon7", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg'
}, {id: "salon8", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg'
}, {id: "salon9", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg'
}, {id: "salon10", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg'
}, {id: "salon11", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg'
}, {id: "salon12", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg'
}, {id: "salon13", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg'
}, {id: "salon14", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg'
}, {id: "salon15", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg'
}, {id: "salon16", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg'
}, {id: "salon17", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg'
}, {id: "salon18", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.jpg'
},

]

catalogRealty: Card[] = [{id: "ri-88", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png'
}, {id: "ri-89", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png'
}, {id: "ri-90", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png'
}, {id: "ri-92", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png'
}, {id: "ri-93", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png'
}, {id: "ri-94", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png'
}, {id: "ri-96", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png'
}, {id: "ri-97", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png'
}, {id: "ri-98", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png'
}, {id: "ri-99", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png'
}, {id: "ri-100", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png'
}, {id: "ri-101", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png'
}, {id: "ri-102", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png'
}, {id: "ri-103", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png'
}, {id: "ri-104", name: 'Сайт з нерухомості', price: 700, promotionalPrice: 500, category: 'Нерухомість', format: '.png'
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
 return `https://tg.pulse.is/CalmHaven_bot?start=66e2aa4a16c4d6f9e10c2bbe|id_site=${id}`
}

  closePopup() {
    this.popup = false;
  }

}

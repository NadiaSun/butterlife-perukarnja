import { HostListener, Injectable, OnDestroy } from '@angular/core';
import { Card } from './interfaces';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService implements OnDestroy {
  popup: boolean = false;
  public popup$: Subject<Card> = new Subject<Card>()
  card!: Card;
  sub!: Subscription;
  width: number = window.innerWidth;


  // {id: "salon1", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси'}
  catalogBeautyCalon: Card[] = [{id: "salon2", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси'
}, {id: "salon3", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси'
}, {id: "salon4", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси'
}, {id: "salon5", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси'
}, {id: "salon6", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси'
}, {id: "salon7", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси'
}, {id: "salon8", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси'
}, {id: "salon9", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси'
}, {id: "salon10", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси'
}, {id: "salon11", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси'
}, {id: "salon12", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси'
}, {id: "salon13", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси'
}, {id: "salon14", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси'
}, {id: "salon15", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси'
}, {id: "salon16", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси'
}, {id: "salon17", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси'
}, {id: "salon18", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси'
},

]

getSrcSet(img: string, big?: boolean): string {
  const w = window.innerWidth;
  if (w <= 479) {
    if(big) {
      return `../assets/img/818/${img}_818.jpg, 
    ../assets/img/1151/${img}_1151.jpg 2x, 
    ../assets/img/1920/${img}_1920.jpg 3x`;
    }
    return `../assets/img/383/${img}_383.jpg, 
    ../assets/img/818/${img}_818.jpg 2x, 
    ../assets/img/1151/${img}_1151.jpg 3x`;
  } else if (480 <= w && w <= 767) {
    if(big) {
      return `../assets/img/1151/${img}_1151.jpg, 
    ../assets/img/1920/${img}_1920.jpg 2x, 
    ../assets/img/1920/${img}_1920.jpg 3x`;
    }
    return `../assets/img/818/${img}_818.jpg, 
    ../assets/img/1151/${img}_1151.jpg 2x, 
    ../assets/img/1920/${img}_1920.jpg 3x`
  } else if (768 <= w && w <= 1023) {
    return `../assets/img/818/${img}_818.jpg, 
    ../assets/img/1920/${img}_1920.jpg 2x`
  } else if (1024 <= w && w <= 1349) {
    return `../assets/img/1151/${img}_1151.jpg, 
    ../assets/img/1920/${img}_1920.jpg 1.5x`
  } else if (1350 <= w && w <= 1439) {
    return `../assets/img/1151/${img}_1151.jpg, 
    ../assets/img/1920/${img}_1920.jpg 1.5x`
  } else if (1440 <= w && w <= 1919) {
    return `../assets/img/1920/${img}_1920.jpg`
  } else if (1920 <= w && w <= 2560) {
    return `../assets/img/1920/${img}_1920.jpg`
  }
  return `../assets/img/1920/${img}_1920.jpg`
}

getSrc(img?: string, size?: '383' | '818' | '1151' | '1920' | '383-cut'): string {
  if(img) {
    return `../assets/img/${size}/${img}.jpg`
  }
  return "../assets/img/" + 'error' + '.jpg'
}

@HostListener('window:resize', ['$event'])
onResize() {
    console.log(window.innerWidth)
}

srcTelBot(id: string): string {
  return `https://tg.pulse.is/CalmHaven_bot?start=66e2aa4a16c4d6f9e10c2bbe|id_site=${id}`
}

  constructor() {
    this.sub = this.popup$.subscribe(value => {
      this.card = value;
      this.popup = true;
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  closePopup() {
    this.popup = false;
  }

}

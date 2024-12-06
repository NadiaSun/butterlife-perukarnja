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

  get version(): string {
    if (window.innerWidth > 900) {
      
      return 'computer';
    } else if (window.innerWidth <= 500) {
      return 'phone';
    }
    return 'computer'
  }
  // {id: "1", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_1_1', imgBig: 'site_1_1_b'}
  catalogBeautyCalon: Card[] = [{id: "2", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_2_1', imgBig: 'site_2_1_b'
}, {id: "3", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_3_1', imgBig: 'site_3_1_b'
}, {id: "4", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_4_1', imgBig: 'site_4_1_b'
}, {id: "5", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_5_1', imgBig: 'site_5_1_b'
}, {id: "6", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_6_1', imgBig: 'site_6_1_b'
}, {id: "7", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_7_1', imgBig: 'site_7_1_b'
}, {id: "8", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_8_1', imgBig: 'site_8_1_b'
}, {id: "9", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_9_1', imgBig: 'site_9_1_b'
}, {id: "10", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_10_1', imgBig: 'site_10_1_b'
}, {id: "11", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_11_1', imgBig: 'site_11_1_b'
}, {id: "12", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_12_1', imgBig: 'site_12_1_b'
}, {id: "13", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_13_1', imgBig: 'site_13_1_b'
}, {id: "14", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_14_1', imgBig: 'site_14_1_b'
}, {id: "15", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_15_1', imgBig: 'site_15_1_b'
}, {id: "16", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_16_1', imgBig: 'site_16_1_b'
}, {id: "17", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_17_1', imgBig: 'site_17_1_b'
}, {id: "18", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_18_1', imgBig: 'site_18_1_b'
},

]

getSrc(img?: string, status?: 'big' | 'small' | 'little'): string {
  if(img) {
    return `../assets/img/${this.version}/${status || 'little'}/${img}.jpg`
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

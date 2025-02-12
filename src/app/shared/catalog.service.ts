import { HostListener, Injectable, OnDestroy } from '@angular/core';
import { Card } from './interfaces';
import { Observable, Subject, Subscription } from 'rxjs';
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
  category: 'beautysalon' = 'beautysalon';

  constructor(private route: Router, private popupService: PopupService) {
  
  }

catalogBeautySalon: Card[] = [{id: "salon1", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon2", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon3", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon4", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon5", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon6", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon7", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon8", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon9", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon10", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon11", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon12", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon13", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon14", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon15", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon16", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon17", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon18", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon19", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon20", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon21", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon22", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon23", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon24", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon25", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon26", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon27", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon28", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon29", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon30", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon31", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon32", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon33", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon34", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon35", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon36", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon37", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon38", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon39", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon40", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon41", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon42", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon43", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon44", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}, {id: "salon45", name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', format: '.png', status: false
}

]


public get catalog(): Card[] {
  return this.catalogBeautySalon
}

clearCash(): Promise<any> {
  return caches.keys().then(cache => {
    console.log(cache)
  });
}

getCutSrcSet(img: string, format: '.png' | '.jpg') {
  return `../assets/img/${this.category}/383-cut/${img}${format}`
}

getSrcSet(img: string, format: '.png' | '.jpg'): string {
  const w = window.innerWidth;
  if (w <= 479) {

    return `../assets/img/${this.category}/818/${img}_818${format}, 
    ../assets/img/${this.category}/1151/${img}_1151${format} 2x, 
    ../assets/img/${this.category}/1920/${img}_1920${format} 3x`;
    // return `../assets/img/${this.category}/383/${img}_383${format}, 
    // ../assets/img/${this.category}/818/${img}_818${format} 2x, 
    // ../assets/img/${this.category}/1151/${img}_1151${format} 3x`;
  } else if (480 <= w && w <= 767) {
      return `../assets/img/${this.category}/1151/${img}_1151${format}, 
    ../assets/img/${this.category}/1920/${img}_1920${format} 2x, 
    ../assets/img/${this.category}/1920/${img}_1920${format} 3x`;

    // return `../assets/img/${this.category}/818/${img}_818${format}, 
    // ../assets/img/${this.category}/1151/${img}_1151${format} 2x, 
    // ../assets/img/${this.category}/1920/${img}_1920${format} 3x`
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
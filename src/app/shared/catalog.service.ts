import { Injectable } from '@angular/core';
import { Card } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  catalogBeautyCalon: Card[] = [{name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_1_1', imgBig: 'site_1_1_b'
}, {name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_2_1', imgBig: 'site_2_1_b'
}, {name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_3_1', imgBig: 'site_3_1_b'
}, {name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_4_1', imgBig: 'site_4_1_b'
}, {name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_5_1', imgBig: 'site_5_1_b'
}, {name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_6_1', imgBig: 'site_6_1_b'
}, {name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_7_1', imgBig: 'site_7_1_b'
}, {name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_8_1', imgBig: 'site_8_1_b'
}, {name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_9_1', imgBig: 'site_9_1_b'
}, {name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_10_1', imgBig: 'site_10_1_b'
}, {name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_11_1', imgBig: 'site_11_1_b'
}, {name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_12_1', imgBig: 'site_12_1_b'
}, {name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_13_1', imgBig: 'site_13_1_b'
}, {name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_14_1', imgBig: 'site_14_1_b'
}, {name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_15_1', imgBig: 'site_15_1_b'
}, {name: 'Сайт салону краси', price: 700, promotionalPrice: 500, category: 'Салони краси', img: 'site_16_1', imgBig: 'site_16_1_b'
},

]


  constructor() { }
}

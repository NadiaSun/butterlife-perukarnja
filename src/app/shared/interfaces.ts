export interface Card {
    name: string;
    id?: string;
    price: number;
    promotionalPrice?: number;
    category: Category;
    img: string;
    imgBig?: string;
}
type Category = 'Салони краси' | 'Перукарні'
export interface Card {
    name: string;
    id: string;
    price: number;
    promotionalPrice?: number;
    category: Category;
    telData?: string;
    format: '.png' | '.jpg'
}
export type Category = 'Салони краси' | 'Нерухомість'
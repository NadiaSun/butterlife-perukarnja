export interface Card {
    name: string;
    id: string;
    price: number;
    promotionalPrice?: number;
    category: Category;
    format: '.png' | '.jpg';
}
export type Category = 'Салони краси' | 'Нерухомість'
export interface Card {
    name: string;
    id: string;
    price: number;
    promotionalPrice?: number;
    category: Category;
    telData?: string;
}
type Category = 'Салони краси' | 'Перукарні'
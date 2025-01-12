export interface Card {
    name: string;
    id: string;
    price: number;
    promotionalPrice?: number;
    category: Category;
    format: '.png' | '.jpg';
    status: boolean;
}

export interface Email {
    [key: string]: unknown;
    name: string,
    phone: string,
    rental: string,
    width: string,
    from_email: string;
    id_site: string;
}

export type Category = 'Салони краси' | 'Нерухомість'
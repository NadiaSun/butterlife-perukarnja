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
    from_name: string,
    from_email: string,
    message: string
}

export type Category = 'Салони краси' | 'Нерухомість'
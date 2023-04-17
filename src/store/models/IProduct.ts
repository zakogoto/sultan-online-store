export interface IProduct {
    id: number;
    name: string;
    title: string;
    type: string;
    brand: string;
    manufacturer: string;
    description: string;
    imgURL: string;
    volume: number;
    weight: number;
    remains: number;
    price: number;
    barecode: number;
    article: number;
    forBody: boolean;
    forHands: boolean;
    isLiquid: boolean;
    discount: boolean;
}
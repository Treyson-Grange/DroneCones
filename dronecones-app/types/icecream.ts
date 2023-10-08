export type Cone = {
    id?: number;
    cone: string;
    price: number;
    amount: number;
    available: boolean;
}

export type IcecreamFlavor = {
    id?: number;
    flavor: string;
    pricePerScoop: number;
    numberOfScoops: number;
    amount: number;
    available: boolean;
}

export type Topping = {
    id?: number;
    topping: string;
    price: number;
    amount: number;
    available: boolean;
}
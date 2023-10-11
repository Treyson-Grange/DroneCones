export type Cone = {
    cone: string;
    price: number;
    amount: number;
    available: boolean;
    buyingAmount: number;
}

export type IcecreamFlavor = {
    flavor: string;
    pricePerScoop: number;
    numberOfScoops: number;
    amount: number;
    available: boolean;
    buyingAmount: number;
}

export type Topping = {
    topping: string;
    price: number;
    amount: number;
    available: boolean;
    buyingAmount: number;
}
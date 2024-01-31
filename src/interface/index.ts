export interface IStoreItem {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  quantity?: number;
}

export interface ICartItem {
  id: number;
  quantity: number;
}

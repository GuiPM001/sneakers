export interface Product {
  id: number;
  name: string;
  image: string;
  description?: string;
  price: number;
  discount?: number;
}
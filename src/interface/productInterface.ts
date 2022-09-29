export interface ProductProps {
  id: number;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating?: Rating;
}
export interface Rating {
  rate: number;
  count: number;
}

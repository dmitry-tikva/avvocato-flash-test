import { Category } from './category';

export interface Item {
  title: string;
  date: string;
  location: string;
  text: string;
  price: number;
  categories: Array<Category>;
}

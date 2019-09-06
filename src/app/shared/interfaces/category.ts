import { CategoryItem } from './categoryItem';

export interface Category {
  id: string;
  name: string;
  items: Array<CategoryItem>;
}

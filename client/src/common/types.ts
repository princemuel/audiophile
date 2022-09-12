export type ReactFormEvent = React.FormEvent<HTMLFormElement>;
export type ReactChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type IProducts = IProduct[];

export interface IProduct {
  id: number;
  slug: string;
  name: string;
  image: CategoryImage;
  category: string;
  categoryImage: CategoryImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludedItem[];
  gallery: IGallery;
  others: Other[];
}

export interface CategoryImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface IncludedItem {
  quantity: number;
  item: string;
}

export interface IGallery {
  first: CategoryImage;
  second: CategoryImage;
  third: CategoryImage;
}

export interface Other {
  slug: string;
  name: string;
  image: CategoryImage;
}

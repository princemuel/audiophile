/*===============================*
          DATA MODELS
 *===============================*
*/
export type IProducts = IProduct[];
export type TProducts = {
  products: IProduct[];
};

export type TCategories = {
  categories: TCategory[];
};
export type TCategory = {
  id: string;
  name: string;
  image: string;
};

export interface IProduct {
  id: number;
  slug: string;
  name: string;
  image: ResponsiveImage;
  category: string;
  categoryImage: ResponsiveImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludedItem[];
  gallery: IGallery;
  others: Other[];
}

export interface ResponsiveImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface IncludedItem {
  quantity: number;
  item: string;
}

export interface IGallery {
  first: ResponsiveImage;
  second: ResponsiveImage;
  third: ResponsiveImage;
}

export interface Other {
  slug: string;
  name: string;
  // category: string;
  image: ResponsiveImage;
}

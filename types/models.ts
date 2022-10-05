/*===============================*
          DATA MODELS
 *===============================*
*/
export type IData = IProduct[];

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
  includes: ICartItem[];
  gallery: IGallery;
  others: Other[];
}

export interface ResponsiveImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface ICartItem {
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
  image: ResponsiveImage;
}

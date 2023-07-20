/*===============================*
          DATA MODELS
 *===============================*
*/

interface ICategory {
  id: string;
  name: string;
  image: string;
}

interface IProduct {
  id: number;
  slug: string;
  name: string;
  image: IResponsiveImage;
  category: string;
  categoryImage: IResponsiveImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludedItem[];
  gallery: IGallery;
  others: Other[];
}

interface IResponsiveImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface IncludedItem {
  quantity: number;
  item: string;
}

interface IGallery {
  first: IResponsiveImage;
  second: IResponsiveImage;
  third: IResponsiveImage;
}

interface Other {
  slug: string;
  name: string;
  // category: string;
  image: IResponsiveImage;
}

interface CartItem {
  slug: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

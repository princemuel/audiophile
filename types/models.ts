import { data } from 'common';
import { Unarray } from './types';

/*===============================*
          DATA MODELS
 *===============================*
*/
export type IData = typeof data;
export type IProduct = Unarray<IData>;
export type ICategoryImage = IProduct['image'];
export type IProductGallery = IProduct['gallery'];

import { IProducts } from './../types/models';
import { createStore as createProductStore } from './create-store';

const productStore = createProductStore<IProducts | null>(null);

export { productStore };

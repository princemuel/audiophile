import useSWR from 'swr';
import type { IProducts } from 'types';

export function useProducts(id: string) {
  const { data, error } = useSWR<IProducts, string>(`/api/products/${id}`);

  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
}

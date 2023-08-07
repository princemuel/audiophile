import { Text } from '@/components';
import { ProductsProvider } from '@/providers';
import { notFound } from 'next/navigation';
import { getAllProductCategories, getProductsByCategory } from '../database';
import { CategoryTemplate } from './category';

interface Props {
  params: IParams;
}

const url = `${process.env.NEXT_PUBLIC_SITE_URL}/api/products`;

const PageRoute = async ({ params: { category } }: Props) => {
  const productsPromise = fetch(url).then((response) => response.json());

  const products = await getProductsByCategory(`${category}`);
  if (!products) notFound();

  return (
    <ProductsProvider promise={productsPromise}>
      <main aria-labelledby='heading' className='flex flex-col gap-48'>
        <div className='bg-neutral-950'>
          <div className='flex items-center justify-center py-40 h-container max-lg:pt-64'>
            <Text
              as='h1'
              id='heading'
              variant={'inverted'}
              size={'2xl'}
              weight={'bold'}
            >
              {category}
            </Text>
          </div>
        </div>

        <CategoryTemplate />
      </main>
    </ProductsProvider>
  );
};

export default PageRoute;

export async function generateStaticParams() {
  const categories = await getAllProductCategories();
  return (categories || []).map((category) => {
    return { category };
  });
}

// export async function generateMetadata({
//   params: { category },
// }: Props): Promise<Metadata> {
//   const products = await getProductsByCategory(`${category}`);

//   if (!products) {
//     return {
//       title: 'Products Not Found',
//       description: 'The requested resource does not exist',
//     };
//   }

//   products.map(product => {
//     product.categoryImage.tablet
//   })

//   return {
//     title: capitalize(category),
//     description: project.meta.description,
//     keywords: [category || ''],
//     openGraph: {
//       type: 'article',
//       title: project.meta.title,
//       description: project.meta.description,
//       authors: ['Prince Muel'],
//       publishedTime: new Date(project.meta.date).toISOString(),
//       images: project.meta.links.thumbnail,
//     },
//     twitter: {
//       title: project.meta.title,
//       description: project.meta.description,
//       images: project.meta.links.thumbnail,
//     },
//   } satisfies Metadata;
// }

import { Text } from '@/components';
import { notFound } from 'next/navigation';
import { getAllProductCategories, getProductsByCategory } from '../database';
import { CategoryTemplate } from './category';

interface Props {
  params: IParams;
}

const PageRoute = async ({ params: { category } }: Props) => {
  const products = await getProductsByCategory(`${category}`);
  if (!products) notFound();

  return (
    <main className='flex flex-col gap-60'>
      <section className='bg-neutral-950'>
        <div className='flex items-center justify-center py-20 h-container'>
          <Text as='h1' className='text-white' uppercase>
            {category}
          </Text>
        </div>
      </section>

      <CategoryTemplate products={products} />
    </main>
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

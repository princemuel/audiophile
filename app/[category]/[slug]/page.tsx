import { getProductByParams } from '@/app/database/get-by-params';
import { getAllProductPaths } from '@/app/database/get-product-paths';
import { notFound } from 'next/navigation';
import { ProductDetailsTemplate } from './product';

interface Props {
  params: IParams;
}

const PageRoute = async ({ params: { slug, category } }: Props) => {
  const product = await getProductByParams(`${slug}`, `${category}`);
  if (!product) notFound();

  return (
    <main className=''>
      <ProductDetailsTemplate product={product} />
    </main>
  );
};

export default PageRoute;

export async function generateStaticParams() {
  const productPaths = await getAllProductPaths();
  return (productPaths || []).map(({ slug, category }) => {
    return { slug, category };
  });
}

// export async function generateMetadata({
//   params: { slug },
// }: Props): Promise<Metadata> {
//   const product = await getProductsBySlug(`${slug}`);

//   if (!product) {
//     return {
//       title: 'Project Not Found',
//       description: 'The requested resource does not exist',
//     };
//   }

//   return {
//     title: project.meta.title,
//     description: project.meta.description,
//     keywords: project.meta.tags,
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

import { getProductBySlug } from '@/app/database/get-by-slug';
import { getAllProductPaths } from '@/app/database/get-product-paths';
import { notFound } from 'next/navigation';

interface Props {
  params: IParams;
}

const PageRoute = async ({ params: { slug } }: Props) => {
  const product = await getProductBySlug(`${slug}`);
  if (!product) notFound();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Page</h1>
      <div>{JSON.stringify(product, null, 2)}</div>
    </main>
  );
};

export default PageRoute;

export async function generateStaticParams() {
  const productPaths = await getAllProductPaths();
  return (productPaths || []).map(({ category, slug }) => {
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

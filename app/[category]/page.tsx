import { notFound } from 'next/navigation';
import { getAllProductCategories } from '../database/get-all-categories';
import { getProductsByCategory } from '../database/get-by-category';

interface Props {
  params: IParams;
}

const PageRoute = async ({ params: { category } }: Props) => {
  const products = await getProductsByCategory(`${category}`);
  if (!products) notFound();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Page</h1>
      <div>{JSON.stringify(products, null, 2)}</div>
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
//   const product = await getProductsByCategory(`${category}`);

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

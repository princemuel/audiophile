import { ProductTemplate } from 'components';
import { SEO } from 'components/atoms';
import { getBySlug, getProductPaths } from 'lib';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferNextPropsType,
  IProduct,
  NextPage,
  Params,
} from 'types';

type Props = InferNextPropsType<typeof getStaticProps>;

const ProductPage: NextPage<Props> = ({ product }) => {
  return (
    <>
      <SEO
        title={product?.name}
        description={product?.description}
        openGraph={{
          title: product?.name,
          description: product?.description,
          images: [
            {
              url: product?.categoryImage?.mobile,
              width: 400,
              height: 400,
              type: 'image/jpeg',
            },
          ],
        }}
      />

      <ProductTemplate product={product} />
    </>
  );
};

export default ProductPage;

export const getStaticProps: GetStaticProps<{ product: IProduct }> = async (
  context
) => {
  const { params } = context as { params: Params };
  const product = (await getBySlug(params?.slug)) as IProduct;
  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const productPaths = await getProductPaths();
  const paths = productPaths?.map((path) => ({
    params: { category: path?.category, slug: path?.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

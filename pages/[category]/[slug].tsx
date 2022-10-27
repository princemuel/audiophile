import { ProductTemplate } from 'components';
import { SEO } from 'components/atoms';
import { RENDER_TITLE_META_TAG } from 'helpers';
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
        title={RENDER_TITLE_META_TAG(product?.name)}
        description={product?.description}
        openGraph={{
          title: RENDER_TITLE_META_TAG(product?.name),
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
  try {
    const { params } = context as { params: Params };
    const product = (await getBySlug(params?.slug)) as IProduct;
    return {
      props: {
        product,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const productPaths = await getProductPaths();
  const paths = productPaths?.map((path) => ({
    params: { category: path?.category, slug: path?.slug },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

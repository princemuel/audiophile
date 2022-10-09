import { GlobalContainer, Heading } from 'components';
import { useRouter } from 'next/router';
import { IProducts } from 'types';

type Props = {
  products: IProducts;
};

const CategoryTemplate = ({ products }: Props) => {
  const { query } = useRouter();
  const productCategory = query.category as string;

  return (
    <>
      <GlobalContainer className='full-width'>
        <Heading id={productCategory} as='h1' className='fs-xl ls-4 uppercase'>
          {productCategory}
        </Heading>
      </GlobalContainer>

      <GlobalContainer as='main' aria-labelledby={productCategory}>
        {/* CATEGORY LINKS */}
        {/* BEST AUDIO GEAR */}
      </GlobalContainer>
    </>
  );
};

export { CategoryTemplate };

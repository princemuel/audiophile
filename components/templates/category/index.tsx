import { GlobalContainer, Heading } from 'components';
import { useRouter } from 'next/router';
import { IProducts } from 'types';

type Props = {
  products: IProducts;
};

const CategoryTemplate = ({ products }: Props) => {
  const router = useRouter();
  const category = router?.query?.category as string;

  return (
    <>
      <GlobalContainer className='full-width'>
        <Heading id={category} as='h1' className='fs-xl ls-4 uppercase'>
          {category}
        </Heading>
      </GlobalContainer>

      <GlobalContainer as='main' aria-labelledby={category}>
        {/* CATEGORY LINKS */}
        {/* BEST AUDIO GEAR */}
      </GlobalContainer>
    </>
  );
};

export { CategoryTemplate };

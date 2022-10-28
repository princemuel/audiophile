import { IProduct } from 'types';
import {
  FeatureContainer,
  FeaturedArticle,
  FeaturedItem,
  FeatureHeading,
  FeatureText,
} from './styles';

type Props = {
  features: string;
  includedItems: IProduct['includes'];
};

const ProductFeatures = ({ features, includedItems }: Props) => {
  return (
    <FeatureContainer>
      <FeaturedArticle>
        <FeatureHeading
          as='h3'
          className='text-neutral-900 fs-800 tracking-200 uppercase'
        >
          Features
        </FeatureHeading>

        {features?.split('\n\n')?.map((paragraph) => (
          <FeatureText key={paragraph?.charAt(1)}>{paragraph}</FeatureText>
        ))}
      </FeaturedArticle>

      <FeaturedArticle gap='2rem'>
        <FeatureHeading
          as='h3'
          className='text-neutral-900 fs-800 tracking-200 uppercase'
        >
          In the box
        </FeatureHeading>

        <div>
          {includedItems?.map((item) => (
            <FeaturedItem key={item?.item}>
              <FeatureText as='strong' className='text-primary-100 fw-700'>
                {item?.quantity}x
              </FeatureText>
              <FeatureText as='span' className='text-'>
                {item?.item}
              </FeatureText>
            </FeaturedItem>
          ))}
        </div>
      </FeaturedArticle>
    </FeatureContainer>
  );
};

export { ProductFeatures };

import galleryStyles from '@/assets/styles/gallery.module.scss';
import {
  BackButton,
  BestAudioGear,
  Button,
  CategoryLinks,
  ProductCard,
  ResponsiveImage,
  Text,
} from '@/components';
import { cn } from '@/lib';
import Link from 'next/link';
interface Props {
  product: IProduct;
}

const ProductDetailsTemplate = ({ product }: Props) => {
  return (
    <>
      <section>
        <div className={'h-container'}>
          <BackButton />
        </div>
      </section>

      <div>
        <div className={cn('h-container')}>
          <ProductCard product={product} priority={true} cart={true} />
        </div>
      </div>

      <section className={cn('h-container')}>
        <article className='flex flex-col items-start justify-between gap-32 lg:flex-row'>
          <header className='flex flex-col items-start gap-12'>
            <Text as='h2' variant={'primary'} size={'xl'} weight={'bold'}>
              Features
            </Text>

            {product?.features?.split('\n\n')?.map((paragraph) => (
              <Text as='p' variant={'primary/50'} key={paragraph?.charAt(1)}>
                {paragraph}
              </Text>
            ))}
          </header>

          <div className='flex w-full basis-full flex-col gap-12 sm:flex-row lg:flex-col'>
            <Text as='h3' variant={'primary'} size={'xl'} weight={'bold'}>
              In the box
            </Text>

            <ul className='m-0 flex flex-col gap-4 sm:mx-auto lg:m-0 lg:flex-col'>
              {product?.includes?.map((included) => (
                <li key={included?.item} className='flex items-center gap-8'>
                  <Text as='strong' variant={'secondary'} weight={'bold'}>
                    {included?.quantity}x
                  </Text>
                  <Text as='span' variant={'primary/50'}>
                    {included?.item}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <section>
        <div className={cn('h-container', galleryStyles.gallery)}>
          {Object.entries(product?.gallery).map(([key, value]) => (
            <ResponsiveImage
              key={key}
              src={value?.desktop}
              alt={`A picture of ${product?.name}`}
              className='overflow-hidden rounded-brand'
            />
          ))}
        </div>
      </section>

      <section>
        <div className={cn('flex flex-col gap-20 h-container')}>
          <header className='flex items-center justify-center'>
            <Text as='h2' variant={'primary'} size={'xl'} weight={'bold'}>
              You may also like
            </Text>
          </header>

          <ul className='flex flex-col items-center gap-24 sm:flex-row'>
            {product?.others?.map((other) => {
              // SHAME FUNCTION: CHEATED 😂
              let category = other?.slug.split('-').at(-1);
              category =
                category?.charAt(category?.length - 1) === 's'
                  ? category
                  : category + 's';
              return (
                <li key={other?.name} className='flex flex-1 flex-col gap-12'>
                  <ResponsiveImage
                    src={other?.image?.desktop}
                    alt={`A picture of ${other?.name}`}
                    className='overflow-hidden rounded-brand'
                  />
                  <div className='flex flex-col items-center gap-12'>
                    <Text
                      as='h4'
                      variant={'primary'}
                      size={'md'}
                      weight={'bold'}
                    >
                      {other?.name}
                    </Text>
                    <Button asChild>
                      <Link href={`/${category}/${other?.slug}`}>
                        See Product
                      </Link>
                    </Button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section>
        <div className={cn('h-container')}>
          <CategoryLinks />
        </div>
      </section>

      <section>
        <div className={cn('h-container')}>
          <BestAudioGear />
        </div>
      </section>
    </>
  );
};

export { ProductDetailsTemplate };

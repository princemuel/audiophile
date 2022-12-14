import { devices } from 'helpers';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';
import { NextPageWithLayout } from 'types';

type Props = {};

const PageNotFound: NextPageWithLayout<Props> = () => {
  const router = useRouter();

  useEffect(() => {
    console.log('%c Before Effect', 'color: red');

    const timer = setTimeout(() => {
      console.log('%c Effect Called', 'color: yellow');
      router.back();
    }, 10000);
    console.log('%c After Effect', 'color: green');

    return () => {
      console.log('%c Effect Unmount', 'color: rebeccapurple');
      clearTimeout(timer);
    };
  }, [router]);

  return (
    <>
      <Head>
        <meta name='description' content='Page Not Found!' key='description' />
        <meta
          property='og:description'
          content='Page Not Found!'
          key='og:description'
        />
        <meta property='og:title' content='Audiophile E-Commerce' key='title' />
        <title>404 | Page Not Found</title>
      </Head>

      <main>
        <Container>
          <VStack>
            <Heading>404</Heading>
            <SubHeading>Page not found!</SubHeading>
            <Text>
              This page is asleep and is wearing its' noice cancellation
              headphones so you may not get it today. Not to worry.
            </Text>
            <Text>
              You can go back to the
              <Link href='/'>
                <a>Homepage</a>
              </Link>
              &nbsp;or another page using the navigation menu
            </Text>
            <Text as='strong'>
              (It will go back to the previous page after 10 seconds)
            </Text>
          </VStack>
        </Container>
      </main>
    </>
  );
};

export default PageNotFound;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  min-height: 70vh;
  padding: 1.6rem;
`;

const Div = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: relative;
`;

const IFrame = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const VStack = styled.div`
  display: grid;
  place-content: center;
  text-align: center;
  max-width: 100%;
`;

const Heading = styled.h1`
  color: var(--clr-neutral-900);
  font-size: var(--fs-800);
  line-height: 5rem;

  @media ${devices.ipad('min')} {
    font-size: var(--fs-xl);
    line-height: 9rem;
  }
`;

const SubHeading = styled.h2`
  margin-block: 1rem;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

const Text = styled.p`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: var(--fs-500);

  a {
    margin-left: 0.3rem;
    color: var(--clr-neutral-900);
    font: inherit;
    font-weight: var(--fw-300);

    &:hover {
      transition: var(--transition);
      color: var(--clr-primary-100);
      text-decoration: underline;
    }
  }
`;

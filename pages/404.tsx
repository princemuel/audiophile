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
    const timer = setTimeout(() => {
      router.push('/');
    }, 10000);

    return () => {
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
              Go back to the
              <Link href='/'>
                <a>Homepage</a>
              </Link>
              &nbsp;or navigate to the other pages using the navigation menu
            </Text>
            <Text as='strong'>
              (This page will redirect to the homepage after 10 seconds)
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

import { TailwindIndicator } from '../atoms';
import { Footer, Header } from '../organisms';

interface Props {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: Props) => {
  return (
    <>
      <Header />

      {children}
      <Footer />
      <TailwindIndicator />
    </>
  );
};

export { BaseLayout };

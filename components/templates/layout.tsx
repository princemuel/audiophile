import { TailwindIndicator } from '../atoms';
import { Footer, LayoutHeader } from '../organisms';

interface Props {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: Props) => {
  return (
    <>
      <LayoutHeader />
      {children}
      <Footer />
      <TailwindIndicator />
    </>
  );
};

export { BaseLayout };

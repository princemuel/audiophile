import { EvenColumns } from '@src/components';

type Props = {};

const Headphones = (props: Props) => {
  return (
    <>
      {/* {[1,2,3,4,5,6,7].map(el => {
      return
    })}
   */}
      <article>
        <EvenColumns>
          <div></div>
          <div></div>
        </EvenColumns>
      </article>
    </>
  );
};

export { Headphones };

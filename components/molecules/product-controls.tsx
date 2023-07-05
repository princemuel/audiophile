import { Button, Text } from '../atoms';

interface Props {
  increment?: () => void;
  decrement?: () => void;
  amount?: number;
}

const ProductControls = ({ increment, decrement, amount }: Props) => {
  return (
    <div className='flex items-center gap-4 bg-zinc-50'>
      <Button
        type='button'
        variant={'text-primary/25'}
        size={'sm'}
        className='hover:bg-zinc-200 focus:bg-zinc-200'
        onClick={decrement}
      >
        <span>&#x2212;</span>
      </Button>
      <Text as='output' variant={'primary'} size={'xs'} weight={'bold'}>
        {amount}
      </Text>
      <Button
        type='button'
        variant={'text-primary/25'}
        size={'sm'}
        className='hover:bg-zinc-200 focus:bg-zinc-200'
        onClick={increment}
      >
        &#43;
      </Button>
    </div>
  );
};

export { ProductControls };

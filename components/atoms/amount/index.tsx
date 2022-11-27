import styled from 'styled-components';

type AmountProps = {
  items: number;
};

const Amount = ({ items }: AmountProps) => {
  return <AmountText>{items}</AmountText>;
};

export { Amount };

const AmountText = styled.span`
  position: absolute;
  top: -50%;
  right: -1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  width: 2rem;
  aspect-ratio: 1;
  background-color: var(--clr-primary-100);
  border-radius: 50%;
`;

import { GlobalContainer } from 'components/atoms';
import { devices } from 'helpers';
import styled from 'styled-components';

export const CheckoutPageContainer = styled(GlobalContainer)``;

export const Form = styled.form`
  --clr-input-border: hsl(var(--clr-800) / 0.1);
  --clr-invalid: hsla(0 65% 49% / 1);
  --focus-color: none;

  @media ${devices.ipad('min')} {
    display: grid;
    grid-template-areas:
      'cf cf cf cf sm sm'
      'cf cf cf cf sm sm'
      'cf cf cf cf . .'
      'cf cf cf cf . .';

    align-items: start;
    column-gap: 5rem;
  }
`;

export const FormContainer = styled.section`
  grid-area: cf;
`;
export const SummaryContainer = styled.section`
  margin-block-start: 5rem;

  @media ${devices.ipad('min')} {
    grid-area: sm;
    margin: 0;
  }

  & > * {
    margin-block-start: 2rem;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr)); */
  grid-template-columns: repeat(auto-fit, minmax(min(30rem, 100%), 1fr));
  column-gap: 3rem;
`;

export const Fieldset = styled.fieldset`
  margin-block-start: 3rem;
  border: none;
`;

export const Legend = styled.legend`
  color: var(--clr-primary-100);

  & + * {
    margin-block-start: 1.5rem;
  }
`;

export const FormGroup = styled.div`
  margin-block-start: 2rem;

  @media ${devices.tablet('min')} {
    &.address {
      grid-column-end: span 2;
    }
  }

  & ::placeholder {
    font-weight: var(--fw-700);
  }

  & :focus-visible {
    --clr-input-border: var(--clr-primary-100);
    --clr-caret: var(--clr-primary-100);
  }

  & :focus-visible::placeholder {
    color: var(--clr-neutral-900);
  }

  & [aria-invalid='true'] {
    --clr-caret: var(--clr-invalid);
    border: 2px solid var(--clr-invalid);
  }

  &:has([aria-invalid='true']) > * {
    color: var(--clr-invalid);
  }
`;

export const Label = styled.label`
  display: block;
`;
const Input = styled.input`
  width: 100%;
  margin-block-start: 0.8rem;
  padding-block: 1.2rem;
  padding-inline: 2rem;
  border: 1px solid var(--clr-input-border);
  border-radius: 0.5rem;
  caret-color: var(--clr-caret);
`;

export const TextInput = styled(Input)``;

export const RadioGroup = styled.div``;

export const RadioInput = styled.input``;

export const PriceComponents = styled.div`
  & > :not(:first-child) {
    margin-block-start: 1rem;
  }
  & > :last-child {
    margin-block-start: 2.5rem;
  }
`;

export const CartProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2.5rem;
`;

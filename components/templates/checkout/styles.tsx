import styled from 'styled-components';

export const Form = styled.form`
  & ::placeholder {
    font-weight: var(--fw-700);
  }

  & :focus-visible::placeholder {
    color: var(--clr-neutral-900);
  }

  & [aria-invalid='true'] {
    border: 1px solid var(--clr-invalid);
  }
  & [aria-invalid='true'] ~ * {
    color: var(--clr-invalid);
  }
`;

export const FormContainer = styled.section``;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  column-gap: 3rem;
`;

export const SummaryContainer = styled.section`
  margin-block-start: 5rem;

  & > * {
    margin-block-start: 2rem;
  }
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
  --clr-invalid: red;
  margin-block-start: 2rem;
`;

export const Label = styled.label`
  display: block;
`;
const Input = styled.input`
  width: 100%;
  margin-block-start: 0.8rem;
  padding-block: 1.2rem;
  padding-inline: 2rem;
  border: 1px solid hsl(var(--clr-800) / 0.1);
  border-radius: 0.5rem;
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

export type TField = {
  field: string;
};

export type TFormGroup = {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  pattern?: RegExp;
  required?: boolean;
};

export type TFormData = {
  field: TField[];
  formGroups: TFormGroup[];
};

export type TFormValues = {
  name: string;
  email: string;
  phone: string;
  address: string;
  code: string;
  city: string;
  country: string;
  paymentMethod?: string;
  eMoneyNumber?: string;
  eMoneyPin?: string;
};

export type TProductToCart = {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
};

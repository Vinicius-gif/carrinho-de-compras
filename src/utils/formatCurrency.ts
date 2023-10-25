type Props = {
  value:number | string;
  currency: string;
}

const formatCurrency = ({value, currency}: Props) => {
  return value.toLocaleString('pt-br', { style: 'currency', currency });
};

export default formatCurrency;

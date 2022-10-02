import { CurrencyOptionFormat, LOCATION_NUMBER_FORMAT, StatusGeneral } from "./const";

export const isGreen = (status) => status === StatusGeneral.green;
export const isYellow = (status) => status === StatusGeneral.yellow;
export const isRed = (status) => status === StatusGeneral.red;

export const formatCurrencyValue = (value) => {
  const number = value.toLocaleString(LOCATION_NUMBER_FORMAT, CurrencyOptionFormat).replace(',', ' ');
  const currencySymbol = number[0];
  const result = number.replace(currencySymbol, `${currencySymbol} `);

  return result;
}

export const formatConditionString = (value) => {
  const firstSymbol = value[0];

  return value
    .replace(firstSymbol, `${firstSymbol} `)
    .replace(',', ', ');
}

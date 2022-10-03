import { CurrencyOptionFormat, LOCATION_NUMBER_FORMAT, NumberField, SortingState, StatusGeneral, TypeOfValue } from "./const";

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

export const setSortingUI = (state) => {
  if(state === SortingState.default) {
    return ' ';
  } else if(state === SortingState.decrease) {
    return '–';
  } else if(state === SortingState.increase) {
    return '+';
  }
}

const sortFunctionWithNameIncrease = (sortParameter) => (a, b) => {
  const nameA = a[sortParameter].toUpperCase();
  const nameB = b[sortParameter].toUpperCase();

  if(nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  return 0;
}

const sortFunctionWithNameDecrease = (sortParameter) =>(a, b) => {
  const nameA = a[sortParameter].toUpperCase();
  const nameB = b[sortParameter].toUpperCase();

  if(nameB < nameA) {
    return -1;
  }

  if (nameB > nameA) {
    return 1;
  }

  return 0;
}

const sortFunctionWithNumberIncrease = (sortParameter) => (a, b) => a[sortParameter] - b[sortParameter];
const sortFunctionWithNumberDecrease = (sortParameter) => (a, b) => b[sortParameter] - a[sortParameter];

export const sortData = (data, typeValue, typeSort, sortParameter ) => {
  if(typeValue === TypeOfValue.name && typeSort === SortingState.increase) {
    return data.sort(sortFunctionWithNameIncrease(sortParameter));
  } else if (typeValue === TypeOfValue.name && typeSort === SortingState.decrease) {
    return data.sort(sortFunctionWithNameDecrease(sortParameter));
  } else if (typeValue === TypeOfValue.value && typeSort === SortingState.increase) {
    return data.sort(sortFunctionWithNumberIncrease(sortParameter));
  } else if (typeValue === TypeOfValue.value && typeSort === SortingState.decrease) {
    return data.sort(sortFunctionWithNumberDecrease(sortParameter));
  } else {
    return data;
  }
}

export const checkFieldType = (value) => {
  const isNumber = NumberField.some((line) => line === value);

  return isNumber ? TypeOfValue.value : TypeOfValue.name;
};

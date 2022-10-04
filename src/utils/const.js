export const LOCATION_NUMBER_FORMAT = 'en-US';

export const HeadForAll = [
  'Project',
  'Token type',
  'Conditions',
  'Volume',
  'ROi',
  'Free float',
  'Insurance hedge',
]

export const HeadWithoutSelector = [
  'Conditions',
  'Volume',
  'ROi',
  'Free float',
  'Insurance hedge',
];

export const HeadWithSelector = {
  project: 'Project',
  token: 'Token type',
};

export const HeadNameConnectServerData =  {
  'Project': 'name',
  'Token type': 'type',
  'Conditions': 'conditions',
  'Volume': 'volume',
  'ROi': 'roi',
  'Free float': 'free',
  'Insurance hedge': 'hedge',
};

export const NumberField = [
  'volume',
  'roi',
  'free',
  'hedge',
];

export const SelectorNameConst = {
  status: 'project-status',
  type: 'token-type',
};

export const StatusGeneral = {
  all: 'All',
  green: 'green',
  yellow: 'yellow',
  red: 'red',
};

export const TypeGeneral = {
  all: 'All',
  trst: 'TRST',
  tht: 'THT',
  thc: 'THC',
};

export const CurrencyOptionFormat = {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
  localeMatcher: 'best fit'
};

export const SortingState = {
  default: 'default',
  decrease: 'decrease',
  increase: 'increase',
};

export const NameSpace = {
  dataTable: 'DATA_TABLE',
}

export const TypeOfValue = {
  value: 'VALUE',
  name: 'NAME',
}

export const AppRoutes = {
  Main: '/',
  Project: (id = ':id') => `/project/${id}`,
}

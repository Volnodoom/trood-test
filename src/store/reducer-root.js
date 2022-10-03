import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from 'utils/const';
import { dataTable } from './data-table/data-table';

export const ReducerRoot = combineReducers ({
  [NameSpace.dataTable]: dataTable.reducer,
});

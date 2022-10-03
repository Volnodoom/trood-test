import { createSelector } from '@reduxjs/toolkit';
import { filterData, sortData } from 'utils/utils';

export const getActiveTab = (state) => state.DATA_TABLE.activeTab;
export const getFilterTab = (state) => state.DATA_TABLE.filterTab;
export const getMainData = (state) => state.DATA_TABLE.mainData;

export const getProcessedData = createSelector(
  getMainData,
  getActiveTab,
  getFilterTab,
  (data, activeTab, activeFilter) => filterData(sortData(data, activeTab), activeFilter)
);

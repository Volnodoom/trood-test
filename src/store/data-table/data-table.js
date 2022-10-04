import { createSlice } from '@reduxjs/toolkit';
import { mockData } from 'mock/mock-data';
import { NameSpace, StatusGeneral, TypeGeneral } from 'utils/const';

const initialState = {
  activeTab: null,
  filterTab: {
    project: StatusGeneral.all,
    token: TypeGeneral.all,
  },
  mainData: mockData,
}


export const dataTable = createSlice({
  name: NameSpace.dataTable,
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setFilter: (state, action) => {
      const update = action.payload;
      state.filterTab = {
        ...state.filterTab,
        ...update,
      };
    },
  },
});

export const {
  setActiveTab,
  setFilter,
} = dataTable.actions;

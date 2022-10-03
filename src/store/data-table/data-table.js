import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from 'utils/const';

const initialState = {
  activeTab: null,
}

export const dataTable = createSlice({
  name: NameSpace.dataTable,
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const {
  setActiveTab,
} = dataTable.actions;

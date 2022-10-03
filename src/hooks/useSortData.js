import { mockData } from 'mock/mock-data';
import { useSelector } from 'react-redux';
import * as selectorTable from "store/data-table/data-table-selector";
import { HeadNameConnectServerData } from 'utils/const';
import { checkFieldType, sortData } from 'utils/utils';

export const useSortData = () => {
  const activeTabStatus = useSelector(selectorTable.getActiveTab);

  if(!activeTabStatus) {
    return mockData;
  }

  const tabName = activeTabStatus.headName;
  const sortingOrder = activeTabStatus.sortState;
  const serverName = HeadNameConnectServerData[tabName];
  const typeValue = checkFieldType(serverName);

  return sortData(mockData, typeValue, sortingOrder, serverName);
}

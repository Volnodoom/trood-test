import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveTab } from 'store/data-table/data-table';
import * as selectorTable from "store/data-table/data-table-selector";
import { SortingState } from 'utils/const';

export const useSortOnHead = (tabName) => {
  const activeTabStatus = useSelector(selectorTable.getActiveTab);
  const dispatch = useDispatch();
  const [sortTabStatus, setSortTabStatus] = useState(SortingState.default);
  const [isStatusActive, setIsStatusActive] = useState(false);

  useEffect(() => {
    if(activeTabStatus === null) {
      setSortTabStatus(SortingState.default);
    } else if(activeTabStatus.headName === tabName) {
      setSortTabStatus(activeTabStatus.sortState)
    } else {
      setSortTabStatus(SortingState.default);
      setIsStatusActive(false);
    }
  }, [activeTabStatus, dispatch, tabName])

  const handleSortTabClick = () => {
    setIsStatusActive((prevValue) => !prevValue);
    let currentSortState;

    if(isStatusActive) {
      currentSortState = SortingState.increase;
    } else {
      currentSortState = SortingState.decrease;
    }

    dispatch(setActiveTab({
      headName: tabName,
      sortState: currentSortState,
    }))
  }

  return [
    sortTabStatus,
    handleSortTabClick,
  ];
}

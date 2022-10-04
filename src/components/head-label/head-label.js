import ButtonTable from "components/button/button";
import { useSortOnHead } from "hooks/useSortOnHead";
import { SortingState } from "utils/const";
import { setSortingUI } from "utils/utils";
import * as S from "./head-label-style";


function HeadLabel({labelName}) {
  const [sortTabStatus, handleSortTabClick] = useSortOnHead(labelName);

  return(
    <>
      <ButtonTable head onClick={handleSortTabClick}>{labelName}</ButtonTable>
      {
        sortTabStatus !== SortingState.default
        ?
          <ButtonTable head extraWidth onClick={handleSortTabClick}>{setSortingUI(sortTabStatus)}</ButtonTable>
        :
          <S.HeadLabelEmptyDiv />
      }
    </>
  )
}

export default HeadLabel;

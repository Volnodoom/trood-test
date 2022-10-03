import ButtonTable from "components/button/button";
import { useSortOnHead } from "hooks/useSortOnHead";
import { setSortingUI } from "utils/utils";
import * as S from "./table-head-style";

function TableHeadData({children}) {
  const [sortTabStatus, handleSortTabClick] = useSortOnHead(children);

  return(
    <S.HeadTableData>
      <ButtonTable head onClick={handleSortTabClick}>{children}</ButtonTable>
      <ButtonTable head extraWidth onClick={handleSortTabClick}>{setSortingUI(sortTabStatus)}</ButtonTable>
    </S.HeadTableData>
  )
}

export default TableHeadData;

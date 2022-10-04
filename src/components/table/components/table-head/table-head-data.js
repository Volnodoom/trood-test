import HeadLabel from "components/head-label/head-label";
import * as S from "./table-head-style";

function TableHeadData({children}) {

  return(
    <S.HeadTableData>
      <HeadLabel labelName={children}/>
    </S.HeadTableData>
  )
}

export default TableHeadData;

import SelectTableHead from "components/select-table-head/select-table-head";
import { HeadWithoutSelector, HeadWithSelector } from "utils/const";
import * as S from "./table-head-style";

function TableHead () {
  return (
    <S.HeadTableStyle>
      <tr>
        {
          Object.values(HeadWithSelector).map((line) => (
            line === HeadWithSelector.project
            ?
              <S.HeadTableDataExtra key={`head-key-${line}`}>
                <SelectTableHead labelName={line} />
              </S.HeadTableDataExtra>
            :
              <S.HeadTableData key={`head-key-${line}`}>
                <SelectTableHead labelName={line} />
              </S.HeadTableData>
          ))
        }
        {
          HeadWithoutSelector.map((line) => (
            <S.HeadTableData key={`head-simpl-${line}`}>
              {line}
            </S.HeadTableData>
          ))
        }
      </tr>
  </S.HeadTableStyle>
  )
}

export default TableHead;

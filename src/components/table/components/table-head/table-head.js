import SelectTableHead from "components/select-table-head/select-table-head";
import { HeadWithoutSelector, HeadWithSelector } from "utils/const";
import TableHeadData from "./table-head-data";
import * as S from "./table-head-style";

function TableHead () {
  return (
    <thead>
      <S.HeadRaw>
        {
          Object.values(HeadWithSelector).map((line) => (
            line === HeadWithSelector.project
            ?
              <S.HeadTableData extra key={`head-key-${line}`}>
                <SelectTableHead labelName={line} />
              </S.HeadTableData>
            :
              <S.HeadTableData key={`head-key-${line}`}>
                <SelectTableHead labelName={line} />
              </S.HeadTableData>
          ))
        }
        {
          HeadWithoutSelector.map((line) => (
            <TableHeadData key={`head-simpl-${line}`}>{line}</TableHeadData>
          ))
        }
      </S.HeadRaw>
  </thead>
  )
}

export default TableHead;

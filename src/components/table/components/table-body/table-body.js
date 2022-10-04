import { useSelector } from 'react-redux';
import ButtonTable from "components/button/button";
import { formatConditionString, formatCurrencyValue } from "utils/utils";
import * as selectorTable from "store/data-table/data-table-selector";
import * as S from "./table-body-style";
import TableBodyData from "./table-body-data";

function TableBody() {
  const currentData = useSelector(selectorTable.getProcessedData);

  const handleBuyClick = (id) => () => id;

  return(
    <tbody>
      {
        currentData.map((line) => (
          <S.BodyRow color={line.status} key={line.name}>
            <TableBodyData project color={line.status} linId={line.id}>{line.name}</TableBodyData>

            <TableBodyData linId={line.id}>{line.type}</TableBodyData>

            <TableBodyData linId={line.id}>{formatConditionString(line.conditions)}</TableBodyData>

            <TableBodyData linId={line.id}>{formatCurrencyValue(line.volume)}</TableBodyData>

            <TableBodyData linId={line.id}>{line.roi} %</TableBodyData>

            <TableBodyData linId={line.id}>{line.free}</TableBodyData>

            <TableBodyData linId={line.id}>{line.hedge} %</TableBodyData>

            <td>
              <ButtonTable onClick={handleBuyClick(line.id)}>Buy</ButtonTable>
            </td>
          </S.BodyRow>
        ))
      }
    </tbody>
  )
}

export default TableBody;

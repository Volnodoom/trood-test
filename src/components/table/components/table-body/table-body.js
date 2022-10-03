import ButtonTable from "components/button/button";
import { formatConditionString, formatCurrencyValue } from "utils/utils";
import { useSelector } from 'react-redux';
import * as selectorTable from "store/data-table/data-table-selector";
import * as S from "./table-body-style";


function TableBody() {
  const currentData = useSelector(selectorTable.getProcessedData);

  return(
    <tbody>
      {
        currentData.map((line) => (
          <S.BodyRow color={line.status} key={line.name}>
            <S.TableDataProject color={line.status}>
              {line.name}
            </S.TableDataProject>

            <td>
              {line.type}
            </td>

            <td>
              {formatConditionString(line.conditions)}
            </td>

            <td>
              {formatCurrencyValue(line.volume)}
            </td>

            <td>
              {line.roi} %
            </td>

            <td>
              {line.free}
            </td>

            <td>
              {line.hedge} %
            </td>

            <td>
              <ButtonTable>Buy</ButtonTable>
            </td>
          </S.BodyRow>
        ))
      }
    </tbody>
  )
}

export default TableBody;

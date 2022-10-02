import ButtonTable from "components/button/button";
import { mockData } from "mock/mock-data";
import { formatConditionString, formatCurrencyValue } from "utils/utils";
import * as S from "./table-body-style";

function TableBody() {
  return(
    <tbody>
      {
        mockData.map((line) => (
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

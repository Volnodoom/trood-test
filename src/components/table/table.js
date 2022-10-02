import { TableBody, TableHead } from "./components/components.js";
import * as S from "./table-style.js";


function Table() {

  return(
    <S.Table>
      <S.Caption>Less Easy Mode. Table Component</S.Caption>
      <TableHead />
      <TableBody />
    </S.Table>
  )
}

export default Table;

import ButtonTable from "components/button/button";
import { useSortOnHead } from "hooks/useSortOnHead";
import { HeadWithSelector, SelectorNameConst, StatusGeneral, TypeGeneral } from "utils/const.js";
import { setSortingUI } from "utils/utils";
import SelectorLabe from "./components/selector-label";
import SelectorSelect from "./components/selector-select";
import * as S from "./select-table-head-style";


function SelectTableHead ({labelName}) {
  const [sortTabStatus, handleSortTabClick] = useSortOnHead(labelName);
  let optionList;

  const makeSelectorName = () => {
    const isStatus = labelName === HeadWithSelector.project;
    const isType = labelName === HeadWithSelector.token;

    if(isStatus) {
      optionList = Object.values(StatusGeneral);
      return SelectorNameConst.status;
    } else if(isType) {
      optionList = Object.values(TypeGeneral);
      return SelectorNameConst.type;
    }
  }

  return(
    <S.SelectHeadDiv>
      <SelectorLabe htmlFor={labelName}>{makeSelectorName()}</SelectorLabe>
      <SelectorSelect name={makeSelectorName()} id={labelName}>
        {
          optionList.map((line) =>
            (
              <option value={line} key={`${line}-${labelName}`}>{line}</option>
            )
          )
        }
      </SelectorSelect>
      <ButtonTable head onClick={handleSortTabClick}>{labelName}</ButtonTable>
      <ButtonTable head extraWidth onClick={handleSortTabClick}>{setSortingUI(sortTabStatus)}</ButtonTable>

    </S.SelectHeadDiv>
  )
}

export default SelectTableHead;

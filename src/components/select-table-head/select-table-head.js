import { HeadWithSelector, SelectorNameConst, StatusGeneral, TypeGeneral } from "utils/const.js";
import SelectorLabe from "./components/selector-label";
import SelectorSelect from "./components/selector-select";
import SelectorText from "./components/selector-text";
import * as S from "./select-table-head-style";


function SelectTableHead ({labelName}) {
  let optionList;

  const isStatus = labelName === HeadWithSelector.project;
  const isType = labelName === HeadWithSelector.token;

  const makeSelectorName = () => {
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
      <SelectorText>{labelName}</SelectorText>
    </S.SelectHeadDiv>
  )
}

export default SelectTableHead;

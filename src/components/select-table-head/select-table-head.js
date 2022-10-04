import { useDispatch } from 'react-redux';
import { HeadWithSelector, SelectorNameConst, StatusGeneral, TypeGeneral } from "utils/const.js";
import SelectorLabe from "./components/selector-label";
import SelectorSelect from "./components/selector-select";
import * as S from "./select-table-head-style";
import { setFilter } from 'store/data-table/data-table';
import HeadLabel from 'components/head-label/head-label';


function SelectTableHead ({labelName}) {
  const dispatch = useDispatch();

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

  const handleSelectorClick = (evt) => {
    const selectedValue = evt.target.value;

    if(isStatus) {
      dispatch(
        setFilter(
          {project: selectedValue}
        )
      )
    } else if(isType) {
      dispatch(
        setFilter(
          {token: selectedValue}
        )
      )
    }
  }

  return(
    <S.SelectHeadDiv>
      <SelectorLabe htmlFor={labelName}>{makeSelectorName()}</SelectorLabe>
      <SelectorSelect
        name={makeSelectorName()}
        id={labelName}
        onClick={handleSelectorClick}
      >
        {
          optionList.map((line) =>
            (
              <option value={line} key={`${line}-${labelName}`}>{line}</option>
            )
          )
        }
      </SelectorSelect>
      <HeadLabel labelName={labelName}/>

    </S.SelectHeadDiv>
  )
}

export default SelectTableHead;

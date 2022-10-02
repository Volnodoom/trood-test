import styled from "styled-components";
import { isGreen, isRed, isYellow } from "utils/utils";

const BodyRow = styled.tr`
  height: 100px;

  border-top: 10px solid white;

  background-color: ${(props) => {
    if(isGreen(props.color)) {
      return props.theme.color.greenBackground;
    } else if(isYellow(props.color)) {
      return props.theme.color.yellowBackground;
    } else if(isRed(props.color)) {
      return props.theme.color.redBackground;
    } else {
      return `${props.theme.color.white}`;

    }
  }}
`;

const TableDataProject = styled.td`
  position: relative;
  padding-left: 50px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translate(-50%, -50%);

    width: 15px;
    height: 15px;
    border-radius: 50%;

    background-color: ${(props) => props.theme.color[props.color]};

    box-shadow: 3px 4px 10px 2px black;
  }
`;

export {
  BodyRow,
  TableDataProject
};

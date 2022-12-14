import styled from "styled-components";
import { standardFont } from "utils/const-style";

const SelectorLabel = styled.label.attrs({className: 'visually-hidden'})``;

const SelectorSelect = styled.select`
  margin-right: 10px;
  padding: 0 10px;

  border: transparent;
  border-radius: 10px;

  background-color: ${(props) => props.theme.color.grey};

  color: ${(props) => props.theme.color.white};
  ${standardFont}
`;

export {
  SelectorLabel,
  SelectorSelect,
}

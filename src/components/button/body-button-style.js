import styled from "styled-components";
import { standardFont } from "utils/const-style";

const BodyButton = styled.button`
  padding: 5px 10px;
  margin-right: 20px;
  border: solid 4px ${(props) => props.theme.color.purple};
  border-radius: 10px;

  background-color: transparent;
  color: ${(props) => props.theme.color.purple};

  ${standardFont}

  &:focus,
  &:hover {
    background-color: ${(props) => props.theme.color.purple};
    color: ${(props) => props.theme.color.white};
  }

  &:active {
    background-color: ${(props) => props.theme.color.purpleShade30};
    color: ${(props) => props.theme.color.white};
  }
`;

const HeadButton = styled.button`
  padding: 0;
  margin: 0;

  width: ${(props) => props.extraWidth ? '20px' : 'auto'};
  border: none;

  background-color: transparent;
  color: ${(props) => props.theme.color.blackPale};

  ${standardFont};
`;

export {
  BodyButton,
  HeadButton,
};


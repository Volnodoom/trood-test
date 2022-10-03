import styled from "styled-components";

// adding extra increase right padding on 30px
const HeadTableData = styled.th`
  padding-right: ${(props) => props.extra ? '80px' : '50px'}
`;

const HeadTableText = styled.p`
  padding: 0;
  padding: 0 10px 0 5px;
  margin: 0;

  display: inline;
`;

export {
  HeadTableData,
  HeadTableText,
}

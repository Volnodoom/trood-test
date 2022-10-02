import * as S from "./button-style";

function ButtonTable({children, ...props}) {
  return <S.Button {...props}>{children}</S.Button>
}

export default ButtonTable;

import * as S from "./body-button-style";

function ButtonTable({children, head, ...props}) {
  if(head) {
    return <S.HeadButton {...props}>{children}</S.HeadButton>
  }

  return <S.BodyButton {...props}>{children}</S.BodyButton>
}

export default ButtonTable;

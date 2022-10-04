import * as S from "./body-button-style";

function ButtonTable({children, ...props}) {
  if(props.head) {
    return <S.HeadButton {...props}>{children}</S.HeadButton>
  }

  return <S.BodyButton {...props}>{children}</S.BodyButton>
}

export default ButtonTable;

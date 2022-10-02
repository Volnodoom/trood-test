import * as S from "./selector-style";

function SelectorText ({children, ...props}) {
  return <S.SelectorText {...props}>{children}</S.SelectorText>
}

export default SelectorText;

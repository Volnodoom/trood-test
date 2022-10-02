import * as S from "./selector-style";

function SelectorLabe ({children, ...props}) {
  return <S.SelectorLabel {...props}>{children}</S.SelectorLabel>
}

export default SelectorLabe;

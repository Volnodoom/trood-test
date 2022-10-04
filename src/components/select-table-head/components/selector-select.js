import * as S from "./selector-style"

function SelectorSelect ({children, ...props}) {
  return <S.SelectorSelect {...props}>{children}</S.SelectorSelect>
}

export default SelectorSelect;

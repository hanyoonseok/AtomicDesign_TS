import React from "react";
import * as S from "./style";

export interface Props {
  /** 버튼 내용 또는 엘리먼트 */
  children?: React.ReactElement | string;
  /** react-router/Link 사용 (내부적인 routing)*/
  to?: string;
  /** 외부 링크 */
  href?: string;
  /** click handler */
  onClick?: () => void;
  /** icon  */
  icon?: string;
  /** fit to size enable */
  submit?: boolean;
}

function Button ({
  children,
  to,
  href,
  onClick,
  icon,
  submit,
  ...props
}:Props):React.ReactElement {
  if(to){//링크 필요한 버튼

  } 
  // default
  return (
    <S.StyledButton type="button" {...props}>
      {children}qwe
    </S.StyledButton>
  );
};

export default Button;

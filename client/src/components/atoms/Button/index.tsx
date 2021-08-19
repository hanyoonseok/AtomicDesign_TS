import React from "react";
import * as S from "./style";

export interface Props {
  /** 버튼 내용 또는 엘리먼트 */
  children?: React.ReactElement | string;
  /** 외부 링크 */
  href?: string;
  /** click handler */
  onClick?: () => void;
  /** icon  */
  icon?: string;
  /** fit to size enable */
  submit?: boolean;
  setTodo?:React.Dispatch<React.SetStateAction<string[]>>
}

function Button ({
  children,
  href,
  onClick,
  icon,
  submit,
  setTodo,
  ...props
}:Props):React.ReactElement {
  // default
  return (
    <S.StyledButton type="button" {...props}>
      {children}
    </S.StyledButton>
  );
};

export default Button;

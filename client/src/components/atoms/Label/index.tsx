import React from "react";
import * as S from "./style";

export interface Props {
  /** 버튼 내용 또는 엘리먼트 */
  children?: React.ReactElement | string | number;
  ftSize?:string;
  ftWeight?:string;
  color?:string;
}

function Label ({
  children,
  ftSize,
  ftWeight,
  ...props
}:Props):React.ReactElement {
  // default
  return (
    <S.StyledLabel ftSize={ftSize} ftWeight={ftWeight} {...props}>{children}</S.StyledLabel>
  );
};

export default Label;

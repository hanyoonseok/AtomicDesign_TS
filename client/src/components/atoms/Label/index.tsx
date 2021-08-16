import React from "react";
import * as S from "./style";

export interface Props {
  /** 버튼 내용 또는 엘리먼트 */
  children?: React.ReactElement | string;
  ftSize?:number;
  ftWeight?:string;
}

function Label ({
  children,
  ftSize,
  ftWeight,
  ...props
}:Props):React.ReactElement {
  // default
  return (
    <S.StyledLabel {...props}>{children}</S.StyledLabel>
  );
};

export default Label;

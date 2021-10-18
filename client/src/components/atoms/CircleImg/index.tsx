import React from "react";
import * as S from "./style";

interface Props{
    width?:string,
    src?:string,
}

const CircleImg = ({width, src}:Props)=>{
  // default
  return (
    <S.CircleImg width={width} src={src}/>
  );
};

export default CircleImg;

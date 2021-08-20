import React from "react";
import * as S from "./style"

interface Props{
    AddTodo():void,
    onChange(e:any):void
}
function AddForm ({
    AddTodo,
    onChange,
}:Props):React.ReactElement {
  // default
  return (
      <S.FormWrapper>
          <S.StyledLabel>할 일을 추가하세요</S.StyledLabel>
          <S.StyledInput onChange={onChange}/>
          <S.PlusBtn onClick={AddTodo}>+</S.PlusBtn>
      </S.FormWrapper>
  );
};

export default AddForm;

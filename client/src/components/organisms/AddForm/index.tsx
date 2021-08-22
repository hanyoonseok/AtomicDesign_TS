import React,{memo} from "react";
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
      <S.FormWrapper onSubmit={AddTodo}>
          <S.StyledInput 
          autoFocus
          placeholder="할 일을 추가하고 Enter를 누르세요" 
          onChange={onChange}/>
      </S.FormWrapper>
  );
};

export default React.memo(AddForm);

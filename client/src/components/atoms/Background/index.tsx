import react from 'react';
import * as S from "./style"

function Background ({
    ...props
}):React.ReactElement {
    // default
    return (
        <S.StyledBackground {...props}/>
    );
  };
  
  export default Background;
  
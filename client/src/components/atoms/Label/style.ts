import styled from "styled-components"

interface Props{
    ftSize?:string,
    ftWeight?:string,
    color?:string
}

export const StyledLabel = styled.label<Props>`
    font-size:${props=>props.ftSize ? props.ftSize:"16px"};
    font-weight:${props=>props.ftWeight};
    color:${props=>props.color && props.color};
`;
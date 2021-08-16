import styled from "styled-components"

interface Props{
    ftSize?:number,
    ftWeight?:string
}

export const StyledLabel = styled.label<Props>`
    font-size:${props=>props.ftSize};
    font-weight:${props=>props.ftWeight};
`;
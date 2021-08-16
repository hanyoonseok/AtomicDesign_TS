import styled from "styled-components"

interface Props{
    bgColor?:string,
    color?:string,
    flexD?:string,
}

export const StyledBackground = styled.div<Props>`
    background-color:${props=>props.bgColor};
    display: flex;
    flex-direction: ${props => props.flexD};
    justify-content:center;
    color: ${props => props.color};
    width: 100%;
    height: 100%; // 혹시 모르니 해둠
    box-sizing: border-box;
    padding:10% 5%;
`
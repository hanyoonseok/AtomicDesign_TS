import styled from "styled-components"
import {Button, Label} from "../../../components"

export const Remove = styled(Button)`
position:absolute;
background-color:white;
right:0;
    display: flex;
  align-items: center;
  justify-content: center;
  color: #ff6b6b;
  font-size: 24px;
  width:70px;
  height:70px;
  cursor: pointer;
  display: none;
`

export const ItemWrapper = styled.div`
    display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  cursor:pointer;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`

export const CheckBtn = styled(Button)`
    width:70px;
    height:70px;
    font-size:1.5rem;
    background-color:white;
    color:green;
`

export const StyledLabel=styled(Label)`
    
`
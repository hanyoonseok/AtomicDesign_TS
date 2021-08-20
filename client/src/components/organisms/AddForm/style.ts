import styled from "styled-components"
import {Label,Button} from "../../../components"

export const FormWrapper = styled.div`
    position:absolute;
    top:0;
    left:0;
    background-color:cyan;
    width:90%;
    height:50%;
    display:flex;
    flex-direction:column;
    border-radius:20px;
    padding:10% 5%;
    margin-top:100px;
    opacity:0.8;
`

export const StyledInput = styled.input`
`

export const StyledLabel = styled(Label)`
`

export const PlusBtn = styled(Button)`
    border-radius:50%;
    width:50px;
    height:50px;
    background-color:green;
    color:white;
`

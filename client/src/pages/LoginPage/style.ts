import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    width:100%;
    height:100%;
    font-size:16px;
    display:flex;
    justify-content:center;
    padding-top:32px;
`

export const LoginForm = styled.div`
    display:flex;
    flex-direction:column;
    width:320px;
    align-items:center;
    justify-content:space-between;
`

export const StyledForm = styled.form`
    width:100%;
    background-color:#F6F8FA;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:32px 32px;
    margin-top:32px;
`

export const StyledInput = styled.input`
    border-radius: 5px;
    width:100%;
    height:32px;
    margin-bottom:20px;
`

export const StyledButton = styled.button`
    height:32px;
    background-color:green;
    color:white;
    border-radius:5px;
`
import styled from 'styled-components'

interface Props{
    flex?:string
}

export const Wrapper = styled.div`
    background-color:#F6F8FA;
    width:100%;
    height:100%;
    display:flex;
    padding:100px 200px 0 350px;
`

export const SubContents = styled.div<Props>`
    width:100%;
    flex:${props => props.flex};
    padding:0 32px;
`
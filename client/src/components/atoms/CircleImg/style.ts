import styled from 'styled-components'

interface Props{
    width?:string,
}

export const CircleImg = styled.img<Props>`
    border-radius:50%;
    width:${props => props.width}
`
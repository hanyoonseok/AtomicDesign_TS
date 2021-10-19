import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items:center;
  img{
        width:35px;
        height:35px;
    }
`;

export const Paper = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  border:1px solid lightgray;
  margin-left:35px;
  padding: 16px;
  display:flex;
  flex-direction:column;
`;

export const PaperTitle= styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`

export const divline = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  background-color:lightgray;
  margin:32px 0;
`;

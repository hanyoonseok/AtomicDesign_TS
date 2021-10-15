import styled from 'styled-components';
import { Button, Label } from '../../../components';

export const SmallBtns = styled.div`
  flex: 1;
  position: absolute;
  right: 0;
`;
export const Remove = styled(Button)`
  flex: 1;
  background-color: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff6b6b;
  font-size: 24px;
  width: 50px;
  height: 35px;
  cursor: pointer;
  display: none;
  margin: 0 auto;
  padding: 0 auto;
`;

export const Edit = styled.button`
  flex: 1;
  background-color: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff6b6b;
  font-size: 24px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  display: none;
  margin: 0 auto;
  padding: 0 auto;
  border: none;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  cursor: pointer;
  width: 100%;
  &:hover {
    ${Remove} {
      display: flex;
    }
    ${Edit} {
      display: flex;
    }
  }
`;

export const CheckBtn = styled(Button)`
  flex: 1;
  width: 50px;
  height: 70px;
  font-size: 1.5rem;
  background-color: white;
  color: green;
  padding: 0;
`;

export const StyledLabel = styled(Label)`
  width: 75%;
  flex: 8;
  overflow-wrap: break-word;
`;

export const StyledInput = styled.input`
  width: 70%;
  flex: 8;
  overflow-wrap: break-word;
  font-size:1.5rem;
`;

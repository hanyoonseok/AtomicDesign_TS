import styled, { css } from 'styled-components';
import { Label, Button } from '../../../components';

export const FlowWrapper = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled(Label)``;

export const TodoWrapper = styled.div`
  width: 512px;
  min-height: 768px;
  height: 100%;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  padding-bottom:10px;
`;

export const PlusBtn = styled(Button)`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: ${(props) => (props.inputOpen ? 'red' : 'green')};
  color: white;
  position: relative;
  font-size: 2rem;
  bottom: 0;
  left: 45%;
  margin-top: 20px;
  transition: 0.125s all ease-in;
  ${(props) =>
    props.inputOpen &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: rotate(45deg);
    `}
`;

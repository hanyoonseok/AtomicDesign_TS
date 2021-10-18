import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #24292f;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 12px 24px;
  position:fixed;
  top: 0;
  z-index:9999;
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items:center;
  padding:0 24px;
`;

export const StyledUl = styled.ul`
  display: flex;
  color:white;
  font-weight:bold;
  li{
      margin-left:16px;
  }
`;

export const StyledInput = styled.input`
  min-height: 28px;
  padding:6px 12px;
`;

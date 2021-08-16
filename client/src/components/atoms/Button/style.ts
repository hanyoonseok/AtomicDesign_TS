import styled, { css } from "styled-components";
import { ifProp, palette, theme } from 'styled-tools';
import { Link } from "react-router-dom";

const buttonStyle = css`
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: transparent; // outline: none
  font-size: inherit;
  margin: 0;
  width: 100%;
  height: 100%;
`;
export const Input = styled.input``;

export const Icon = styled.img`
  margin-right: 0.5rem;
  height: 2em;
`;
export const StyledButton = styled.button`
    ${buttonStyle}
`;
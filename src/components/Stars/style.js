import styled from "styled-components";

export const Container = styled.div`
  font-size: ${({ size }) => size};
  color: #B8860B;
  display: inline-flex;
  align-items: center;
  transition: color 0.25s ease-in-out;
  

  &:hover {
    color: #DAA520;
  }
`;
import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 20rem; 
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.INPUTS_BACKGROUND || "#f9f9f9"};
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR || "#fff"};
  font-size: 1.5rem;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.PLACEHOLDER_COLOR || "#aaa"};
  }

  &:focus {
      outline: none;
      border-bottom: 2px solid ${({ theme }) => theme.COLORS.SUBTITLES_COLOR};
    }
`;
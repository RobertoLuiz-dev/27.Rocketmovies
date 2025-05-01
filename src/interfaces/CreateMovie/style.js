import styled from "styled-components";
import { Button } from "../../components/Button";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.GLOBAL_BACKGROUND};
  overflow: hidden; /* Evita rolagem na página principal */
`;

export const MainContent = styled.main`
  width: 85%;
  height: 100vh;
  overflow-y: auto;
  padding-right: 1rem;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.INPUTS_BACKGROUND};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.TITLES_AND_BUTTONS_AND_STARS_COLOR};
    border-radius: 1rem;
  }
`;

export const PageTitle = styled.h1`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.COLORS.white};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.PLACEHOLDERS_COLOR};
  }
`;

export const InputRow = styled.div`
  display: flex;
  gap: 2rem;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.COMMENTS_BACKGROUND};
  font-size: 1.4rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.PLACEHOLDERS_COLOR};
    opacity: 1;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.COLORS.TITLES_AND_BUTTONS_AND_STARS_COLOR};
  }
`;

export const TagsBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.COLORS.TAGS_BAR_COLOR};
  border-radius: 1rem;
`;

export const AddTag = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  border-style: dashed;
  border-radius: 0.8rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
`;

export const ButtonDelete = styled(Button)`
  border: 2px solid ${({ theme }) => theme.COLORS.DELETE_BUTTON_BORDER};
  background-color: ${({ theme }) => theme.COLORS.DELETE_BUTTON_BACKGROUND};
  color: ${({ theme }) => theme.COLORS.DELETE_BUTTON_TEXT};
`;
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.GLOBAL_BACKGROUND};
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const Brand = styled.div`
  text-align: start; 
  margin-bottom: 4rem;
  width: 30rem; 

  h1 {
    font-size: 4rem; 
    color: ${({ theme }) => theme.COLORS.TITLES_AND_BUTTONS_AND_STARS_COLOR};
  }

  p {
    font-size: 1.1rem; 
    color: ${({ theme }) => theme.COLORS.COMMENTS_FONT_COLOR};
  }
`;

export const Form = styled.form`
  width: 30rem; 
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.COLORS.white};
  text-align: start;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  input {
    background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND};
    border-radius: 0.5rem;
    padding: 0.8rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.INPUT_TEXT};
  }
`;

export const ActionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;

  button {
    background-color: ${({ theme }) => theme.COLORS.BUTTON_BACKGROUND};
    color: ${({ theme }) => theme.COLORS.BUTTON_TEXT};
    padding: 1rem 2rem;
    border: none;
    cursor: pointer;
    font-size: 1.6rem;
  }

  button:hover {
    background-color: ${({ theme }) => theme.COLORS.BUTTON_HOVER_BACKGROUND};
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.COLORS.SUBTITLES_COLOR}; 
  font-size: 1.4rem;
  text-align: center;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.COLORS.TITLES_AND_BUTTONS_AND_STARS_COLOR}; 
  }
`;

export const BackgroundImage = styled.div`
  flex: 1;
  background: url('/cinema.png') no-repeat center center;
  background-size: cover;
`;
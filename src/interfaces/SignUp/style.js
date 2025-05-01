import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 50%;
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
`;

export const ActionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  display: flex; 
  align-items: center; 
  gap: 0.5rem; 
  color: ${({ theme }) => theme.COLORS.SUBTITLES_COLOR};
  text-decoration: none;
  font-size: 1.4rem;
  cursor: pointer;
  margin-top: 2rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const BackgroundImage = styled.div`
  flex: 1;
  background: url('/cinema.png') no-repeat center;
  background-size: cover;
`;
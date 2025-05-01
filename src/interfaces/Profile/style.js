import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative; /* Permite que StyledLink use position absolute */
  background-color: ${({ theme }) => theme.COLORS.GLOBAL_BACKGROUND};
`;

export const Content = styled.section`
  width: 100%;
  max-width: 40rem;
  min-height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center; 
  gap: 2rem;
  margin: 6rem auto 0;
`;

export const StyledLink = styled(Link)`
  position: absolute;
  top: 6rem; 
  left: 10rem; 
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.TITLES_AND_BUTTONS_AND_STARS_COLOR};
  font-size: 1.6rem;
`;

export const ProfileImage = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  button.camera-icon {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: ${({ theme }) => theme.COLORS.TITLES_AND_BUTTONS_AND_STARS_COLOR};
    border: none;
    padding: 1.5rem;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
  margin-top: 3rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 1.8rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.COLORS.INPUTS_BACKGROUND};
  background-color: ${({ theme }) => theme.COLORS.COMMENTS_BACKGROUND};
  color: ${({ theme }) => theme.COLORS.FONTS_COLOR};
  font-size: 1.4rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.COLORS.TITLES_AND_BUTTONS_AND_STARS_COLOR};
  }
`;

export const SaveButton = styled.button`
  width: 100%;
  padding: 2rem;
  margin-top: 2rem;
  font-size: 1.6rem;
  font-weight: bold;
  background-color: ${({ theme }) => theme.COLORS.TITLES_AND_BUTTONS_AND_STARS_COLOR};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.PLACEHOLDERS_COLOR};
  }
`;
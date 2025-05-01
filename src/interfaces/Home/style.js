import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.COLORS.GLOBAL_BACKGROUND};
  color: ${({ theme }) => theme.COLORS.FONTS_COLOR};
  box-sizing: border-box;
`;

export const Section = styled.section`
  padding: 0 12rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.FONTS_COLOR};
    }

    button {
      padding: 1rem 2rem;
      background-color: ${({ theme }) => theme.COLORS.TITLES_AND_BUTTONS_AND_STARS_COLOR};
      color: ${({ theme }) => theme.COLORS.TEXT_BUTTON};
      border: none;
      border-radius: 0.8rem;
      font-size: 1.6rem;
      cursor: pointer;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export const NotesList = styled.ul`
  list-style: none;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-height: calc(100vh - 12rem);
  overflow-y: auto;
  padding-right: 1rem;

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

export const NoteItem = styled.li`
  background-color: ${({ theme }) => theme.COLORS.COMMENTS_BACKGROUND};
  padding: 2rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.TITLES_AND_BUTTONS_AND_STARS_COLOR}; 
    margin-bottom: 1rem;
    cursor: pointer;
    text-decoration: none;
  }

  p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.FONTS_COLOR};
    margin-bottom: 1rem;
  }

  footer {
    display: flex;
    gap: 0.8rem;

    span {
      background-color: ${({ theme }) => theme.COLORS.COMMENT_TAGS_BACKGROUND};
      color: ${({ theme }) => theme.COLORS.FONTS_COLOR};
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      font-size: 1.4rem;
    }
  }
`;
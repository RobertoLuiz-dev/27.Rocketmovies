import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Garante que apenas o Content controle a rolagem */
  background-color: ${({ theme }) => theme.COLORS.GLOBAL_BACKGROUND};
`;

export const Content = styled.section`
  width: 85%;
  flex-grow: 1;
  overflow-y: scroll !important; /* Força a barra de rolagem */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 4rem auto 1rem;
  position: relative;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.INPUTS_BACKGROUND};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.TITLES_AND_BUTTONS_AND_STARS_COLOR};
    border-radius: 1rem;
    opacity: 1;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  > h1{
    color: ${({ theme }) => theme.COLORS.FONTS_COLOR};
  }
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.COLORS.TITLES_AND_BUTTONS_AND_STARS_COLOR}; 
`;

export const AuthorInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.PLACEHOLDERS_COLOR};
  margin-bottom: 1rem;

  strong {
    font-weight: bold;
  }

  span {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.FONTS_COLOR};
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  span {
    background-color: ${({ theme }) => theme.COLORS.COMMENT_TAGS_BACKGROUND};
    color: ${({ theme }) => theme.COLORS.FONTS_COLOR};
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 1.4rem;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-right: 1rem;
`;

export const ReviewSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.COLORS.COMMENTS_BACKGROUND};
  border-radius: 0.8rem;
  
  /* Permitindo crescimento automático */
  flex-grow: 1; 
  max-height: none; /* Removendo qualquer limite de altura */
  overflow: visible; /* Garantindo que todo o texto apareça */
  word-wrap: break-word; /* Evita cortes abruptos de texto */
`;

export const ReviewText = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.FONTS_COLOR};
  overflow-wrap: break-word; /* Impede texto de ultrapassar o contêiner */
  white-space: pre-wrap; /* Mantém formatação de texto e permite quebras de linha */
`;
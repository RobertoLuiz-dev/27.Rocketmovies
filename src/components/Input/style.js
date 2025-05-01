import styled from "styled-components";

export const Container = styled.div`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.INPUTS_BACKGROUND};
  color: ${({ theme }) => theme.COLORS.FONTS_COLOR};

  margin-bottom: 0.8rem;
  border-radius: 1rem;
  padding: 0.8rem;

  > svg { /* Estilos para os ícones */
    margin-right: 0.8rem; 
    color: ${({ theme }) => theme.COLORS.ICONS_COLOR || theme.COLORS.FONTS_COLOR};
    flex-shrink: 0; /* Evita que o ícone seja redimensionado */
  }

  > input {
    flex: 1;
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.FONTS_COLOR};
    font-size: 1.5rem;
    padding: 0.5rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.PLACEHOLDERS_COLOR};
    }

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.SUBTITLES_COLOR};
    }

    &:focus {
      outline: none;
      border-bottom: 2px solid ${({ theme }) => theme.COLORS.SUBTITLES_COLOR};
    }
  }
`;

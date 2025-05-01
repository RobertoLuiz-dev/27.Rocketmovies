import styled from "styled-components";

export const Container = styled.div`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  background-color: ${({ theme }) => theme.COLORS.INPUTS_BACKGROUND};
  color: ${({ theme }) => theme.COLORS.FONTS_COLOR};
  border-radius: 8px;
  padding: 15px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.98);
  }

  h1 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.TITLES_AND_BUTTONS_AND_STARS_COLOR};
  }

  footer {
    margin-top: 10px;
    display: flex;
    gap: 8px;
  }
`;
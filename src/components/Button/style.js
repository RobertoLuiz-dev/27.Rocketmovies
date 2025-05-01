import styled from "styled-components";

export const Container = styled.button`
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '5rem'};
    
    /* Define cor do fundo com base na variante */
    background-color: ${({ theme, variant }) =>
        variant === "delete" ? theme.COLORS.TAGS_BAR_COLOR : theme.COLORS.TITLES_AND_BUTTONS_AND_STARS_COLOR};
    
    /* Define cor do texto com base na variante */
    color: ${({ theme, variant }) =>
        variant === "delete" ? theme.COLORS.TITLES_AND_BUTTONS_AND_STARS_COLOR : theme.COLORS.TEXT_BUTTON};
    
    /* Define a borda do botão de exclusão */
    border: ${({ theme, variant }) => 
        variant === "delete" ? `none` : "none"};

    padding: 0 1.6rem;
    border-radius: 1rem;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background-color: ${({ theme, variant }) =>
            variant === "delete" ? theme.COLORS.DARK_BLACK : theme.COLORS.SUBTITLES_COLOR};
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;
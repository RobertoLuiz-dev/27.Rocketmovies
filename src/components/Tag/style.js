import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center; 
    justify-content: center; 
    background-color: ${({ bgColor, theme }) => bgColor || theme.COLORS.COMMENT_TAGS_BACKGROUND};
    color: ${({ theme }) => theme.COLORS.FONTS_COLOR};
    padding: 1rem 2rem;
    border-radius: 0.8rem;
    font-size: 1.4rem;
    font-weight: 500;
    white-space: nowrap;
    text-align: center;
`;
import styled from "styled-components";

export const Container = styled.section`
    margin: ${({ margin }) => margin || '6rem 12rem'};
    padding: ${({ padding }) => padding || '20px'};
    display: flex;
    flex-direction: column;

    background-color: ${({ theme }) => theme.COLORS.INPUTS_BACKGROUND};
    color: ${({ theme }) => theme.COLORS.FONTS_COLOR};
    border-radius: 8px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 

    h2 {
        margin-bottom: 4rem;
        font-size: 2.4rem; 
        font-weight: bold;
    }

    .tags {
        display: flex;
        gap: 10px;
        margin-top: 10px; 
    }

    .tags span {
        background-color: #333; 
        color: #fff; 
        padding: 5px 10px; 
        border-radius: 5px; 
        font-size: 1.4rem; 
    }

    .description {
        font-size: 1.6rem; 
        line-height: 1.5;
        margin-top: 1.5rem;
    }

    @media (max-width: 768px) {
        margin: 4rem 6rem;
        padding: 16px;
    }
`;
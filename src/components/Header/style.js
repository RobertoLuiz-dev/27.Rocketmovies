import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 12rem;
  gap: 6rem;
  background-color: ${({ theme }) => theme.COLORS.HEADER_BACKGROUND};
  

  .logo h1 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.H1_FONT_COLOR};
  }

  .search {
    flex: 1;
    min-width: 20rem;
  }

  .user {
    display: flex;
    align-items: center;
    gap: 2rem;

    > .info {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      > strong {
        font-size: 1.8rem;
        color: ${({ theme }) => theme.COLORS.MAIN_HEADER_FONT_COLOR};
      }

      button {
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.SECONDARY_HEADER_FONT_COLOR};
        font-size: 1.4rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
          font-size: 1.6rem;
          color: ${({ theme }) => theme.COLORS.H1_FONT_COLOR};
          transform: scale(1.02);
        }
      }
    }

    img {
      width: 6rem;
      height: 6rem;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.COLORS.PRIMARY};
    }
  }

  @media (max-width: 768px) {
    padding: 1rem 4rem;
    gap: 2rem;

    .logo h1 {
      font-size: 2rem;
    }

    img {
      width: 4rem;
      height: 4rem;
    }
  }
`;
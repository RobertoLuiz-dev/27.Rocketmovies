import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.COLORS.SUBTITLES_COLOR}; 
  font-size: 1.4rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.COLORS.TITLES_AND_BUTTONS_AND_STARS_COLOR}; 
  }
`;
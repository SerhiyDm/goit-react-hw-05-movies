import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 4px 4px 2px;
  color: black;
  border-radius: 4px;
  text-decoration: none;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.15) inset;

  :hover {
    color: green;
  }
`;
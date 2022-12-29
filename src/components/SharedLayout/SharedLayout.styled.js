import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wraper = styled.div`
  margin: 0, auto;
`;

export const Header = styled.header`
  width: 100%;
  padding: 10px;
  box-shadow: 0px 5px 10px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 5px 10px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 5px 10px -3px rgba(0, 0, 0, 0.75);
  > nav {
    display: flex;
    gap: 12px;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: red;
  }
`;

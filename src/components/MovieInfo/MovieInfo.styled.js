import styled from 'styled-components';

export const Wraper = styled.div`
  display: ${p => (p.display ? p.display : 'block')};
  gap: 10px;
  padding: ${p => p.padding};
  box-shadow: 0px 8px 8px -6px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 8px 8px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 8px 8px -6px rgba(0, 0, 0, 0.75);
`;
export const InfoWraper = styled.div`
  width: auto;
`;

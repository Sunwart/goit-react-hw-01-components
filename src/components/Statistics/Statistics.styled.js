import styled from 'styled-components';

export const StatsContainer = styled.section`
  margin: 16px 0;
  background-color: white;
  display: inline-flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => {
    return theme.shadow;
  }};
`;

export const StatsTitle = styled.h2`
  padding: 16px;
  text-align: center;
  text-transform: uppercase;
  color: gray;
`;

export const Stats = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const StatsEntry = styled.li`
  color: white;
  padding: 8px;
  text-align: center;
  width: 60px;
  :nth-child(4n + 1) {
    background-color: #54beff;
  }
  :nth-child(4n + 2) {
    background-color: #29e6d0;
  }
  :nth-child(4n + 3) {
    background-color: #c869ff;
  }
  :nth-child(4n + 4) {
    background-color: #ff69de;
  }
`;

export const StatsLabel = styled.span`
  font-size: 12px;
`;

export const StatsValue = styled.span`
  display: block;
  font-size: 18px;
`;

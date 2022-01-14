import styled from 'styled-components';

export const Friend = styled.li`
  background-color: white;
  display: flex;
  margin-bottom: 8px;
  box-shadow: ${({ theme }) => {
    return theme.shadow;
  }};
  align-items: center;
  border-radius: 4px;
  padding: 8px 16px;
`;

export const FriendImg = styled.img`
  margin: 0 16px;
`;

export const FriendName = styled.p`
  font-weight: bold;
  font-size: 18px;
`;

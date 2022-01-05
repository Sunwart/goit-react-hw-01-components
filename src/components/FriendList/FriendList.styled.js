import styled from 'styled-components';

export const FriendsList = styled.ul`
  margin: 16px;
  display: inline-flex;
  flex-direction: column;
`;

export const Friend = styled.li`
  background-color: white;
  display: flex;
  margin-bottom: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
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

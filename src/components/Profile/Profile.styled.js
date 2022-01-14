import styled from 'styled-components';

export const ProfileContainer = styled.div`
  margin: 16px;
  width: 320px;
  border-radius: 4px;
  background-color: #f2f2f2;
  box-shadow: ${({ theme }) => {
    return theme.shadow;
  }};
`;

export const MainProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

export const Photo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #f2f2f2;
  margin: 32px 0;
`;

export const UserName = styled.p`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 8px;
`;

export const NickName = styled.p`
  color: gray;
  font-size: 14px;
  margin-bottom: 4px;
`;

export const Location = styled.p`
  color: gray;
  font-size: 16px;
  margin-bottom: 32px;
`;

export const StatsContainer = styled.ul`
  display: flex;
  text-align: center;

  > li {
    flex-basis: 33.33%;
    padding: 20px;
    border-top: 2px #e0e0e0 solid;

    :first-child {
      border-bottom-left-radius: 4px;
      border-right: 2px #e0e0e0 solid;
    }

    :last-child {
      border-bottom-right-radius: 4px;
      border-left: 2px #e0e0e0 solid;
    }
  }
`;

export const StatsLabel = styled.span`
  color: gray;
  font-size: 14px;
`;

export const StatsNumber = styled.span`
  display: block;
  font-weight: 700;
  font-size: 20px;
`;

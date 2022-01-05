import PropTypes from 'prop-types';

import { FriendsList, Friend, FriendImg, FriendName } from './FriendList.styled';

function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends.map(elem => {
        return (
          <Friend key={elem.id}>
            <span>
              {elem.isOnline ? (
                <svg width="10" height="10">
                  <circle r="5" fill="green" cx="5" cy="5" />
                </svg>
              ) : (
                <svg width="10" height="10">
                  <circle r="5" fill="red" cx="5" cy="5" />
                </svg>
              )}
            </span>
            <FriendImg src={elem.avatar} alt="User avatar" width="48" />
            <FriendName>{elem.name}</FriendName>
          </Friend>
        );
      })}
    </FriendsList>
  );
}

FriendList.propTypes = { friends: PropTypes.arrayOf(PropTypes.object) };

export default FriendList;

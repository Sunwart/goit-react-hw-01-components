import PropTypes from 'prop-types';
import { BsFillCircleFill } from 'react-icons/bs';

import { Friend, FriendImg, FriendName } from './FriendListItem.styled';

function FriendListItem({ friends }) {
  return friends.map(({ id, isOnline, avatar, name }) => {
    return (
      <Friend key={id}>
        <span>
          {isOnline ? <BsFillCircleFill fill="green" /> : <BsFillCircleFill fill="red" />}
        </span>
        <FriendImg src={avatar} alt="User avatar" width="48" />
        <FriendName>{name}</FriendName>
      </Friend>
    );
  });
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default FriendListItem;

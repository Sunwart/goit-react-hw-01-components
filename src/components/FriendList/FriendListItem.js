import PropTypes from 'prop-types';
import { BsFillCircleFill } from 'react-icons/bs';

import { Friend, FriendImg, FriendName } from './FriendListItem.styled';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Friend>
      <span>{isOnline ? <BsFillCircleFill fill="green" /> : <BsFillCircleFill fill="red" />}</span>
      <FriendImg src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </Friend>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;

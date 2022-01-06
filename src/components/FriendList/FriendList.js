import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem';

import { FriendsList } from './FriendList.styled';

function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return <FriendListItem avatar={avatar} name={name} isOnline={isOnline} key={id} />;
      })}
    </FriendsList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;

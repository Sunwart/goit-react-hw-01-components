import FriendListItem from './FriendListItem';

import { FriendsList } from './FriendList.styled';

function FriendList({ friends }) {
  return (
    <FriendsList>
      <FriendListItem friends={friends}></FriendListItem>
    </FriendsList>
  );
}

export default FriendList;

import Profile from './components/Profile/Profile';
import user from './components/data/user.json';

import Statistics from './components/Statistics/Statistics';
import data from './components/data/data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './components/data/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/data/transactions.json';

import { Container } from './App.styled';

export default function App() {
  return (
    <>
      <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <FriendList friends={friends} />
      </Container>
      <Container>
        <TransactionHistory items={transactions} />
        <Statistics title="Upload stats" stats={data} />
      </Container>
    </>
  );
}

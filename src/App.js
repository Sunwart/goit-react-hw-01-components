import Profile from './components/Profile/Profile';
import user from './components/data/user.json';

import Statistics from './components/Statistics/Statistics';
import data from './components/data/data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './components/data/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/data/transactions.json';

import { Container } from './App.styled';

import { Filter } from './components/Filter/Filter';

import { ThemeProvider } from 'styled-components';
import { theme } from './components/data/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Filter
        isOpen
        searchable
        options={[
          { value: 'ff0000', label: 'red' },
          { value: 'ff8000', label: 'orange' },
          { value: 'ffff00', label: 'yellow' },
          { value: '80ff00', label: 'chartreuse' },
          { value: '00ff00', label: 'green' },
          { value: '00ff80', label: 'spring green' },
          { value: '00ffff', label: 'cyan' },
          { value: '0080ff', label: 'dodger blue' },
          { value: '0000ff', label: 'blue' },
          { value: '8000ff', label: 'purple' },
          { value: 'ff00ff', label: 'violet' },
          { value: 'ff0080', label: 'magenta' },
        ]}
      />
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
    </ThemeProvider>
  );
}

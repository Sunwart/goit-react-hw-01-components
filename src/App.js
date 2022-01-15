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

import Dropdown from './components/Dropdown';
import Counter from './components/Counter';

import ShowTime from './components/ShowTime/ShowTime';

import ToDoList from './components/ToDoList';

export const colorPickerOptions = [
  { value: '#ff0000', label: 'red' },
  { value: '#ff8000', label: 'orange' },
  { value: '#ffff00', label: 'yellow' },
  { value: '#80ff00', label: 'chartreuse' },
  { value: '#00ff00', label: 'green' },
  { value: '#00ff80', label: 'spring green' },
  { value: '#00ffff', label: 'cyan' },
  { value: '#0080ff', label: 'dodger blue' },
  { value: '#0000ff', label: 'blue' },
  { value: '#8000ff', label: 'purple' },
  { value: '#ff00ff', label: 'violet' },
  { value: '#ff0080', label: 'magenta' },
];

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToDoList />
      <Dropdown />
      <Counter step={5} initialValue={20} />
      <ShowTime />
      <Filter isOpen searchable options={colorPickerOptions} />
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

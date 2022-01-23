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

import ToDoListSection from './components/ToDoList';

import Form from './components/Form';

import { colorPickerOptions } from './components/data/colorPickerOptions';

import Tabs from './components/Tabs/Tabs';
import tabs from './components/data/tabs.json';
import { Example1 } from './components/VideoList/Example1';

import { Reader } from './components/Reader/Reader';
import publications from './components/data/publications.json';
import { News } from './components/News/News';
import Pokemon from './components/Pokemon/Pokemon';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>REACT PRACTICE</h1>
      <Pokemon />
      <News />
      <Reader items={publications} />
      <Example1 />

      <Tabs items={tabs} />
      <ToDoListSection />
      <br />
      <h2>Simple FORM</h2>
      <Container>
        <Form onSubmit={values => console.log(values)} />
        <Dropdown />
        <Filter isOpen searchable options={colorPickerOptions} />
      </Container>
      <Container>
        <Counter step={5} initialValue={20} />
      </Container>
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
};

export default App;

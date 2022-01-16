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

import ToDoListSection from './components/ToDoList';

import Form from './components/Form';

import { colorPickerOptions } from './components/data/colorPickerOptions';

import FormikForm from './components/FormikFrom/FormikForm';

const App = props => {
  return (
    <ThemeProvider theme={theme}>
      <FormikForm onSubmit={x => console.log(x)} />
      <Container>
        <Form onSubmit={values => console.log(values)} />
        <Dropdown />
        <Filter isOpen searchable options={colorPickerOptions} />
      </Container>
      <ToDoListSection />
      <Container>
        <Counter step={5} initialValue={20} />
      </Container>
      <ShowTime />
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

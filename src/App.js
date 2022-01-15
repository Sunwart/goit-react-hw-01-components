import { Component } from 'react';

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

import Form from './components/Form';

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

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'ToDo 1 ToDo 1 ToDo 1 ToDo 1 ToDo 1', completed: false },
      { id: 'id-2', text: 'ToDo 2 ToDo 2 ToDo 2 ToDo 2 ToDo 2 ToDo 2 ', completed: false },
      { id: 'id-3', text: 'ToDo 3 ToDo 3 ToDo 3 ToDo 3 ', completed: true },
      { id: 'id-4', text: 'ToDo 4', completed: false },
      { id: 'id-5', text: 'ToDo 5 ToDo 5 ToDo 5 ', completed: false },
      { id: 'id-6', text: 'ToDo 6 ToDo 6 ToDo 6 ToDo 6 ToDo 6', completed: true },
      { id: 'id-7', text: 'ToDo 7 ToDo 7 ToDo 7', completed: false },
      { id: 'id-8', text: 'ToDo 8 ToDo 8', completed: false },
    ],
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({ todos: prevState.todos.filter(todo => todo.id !== todoId) }));
  };

  render() {
    const { todos } = this.state;
    const completedTodosNumber = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0,
    );

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Form onSubmit={values => console.log(values)} />
          <Dropdown />
          <Filter isOpen searchable options={colorPickerOptions} />
        </Container>
        <>
          <ToDoList todos={todos} onDeleteTodo={this.deleteTodo} />
          <div>
            <p>Total number of tasks: {todos.length}</p>
            <p>Number of completed tasks: {completedTodosNumber}</p>
          </div>
        </>
        <Counter step={5} initialValue={20} />
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
  }
}

export default App;

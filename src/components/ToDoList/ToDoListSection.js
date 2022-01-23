import './ToDoList.css';
import { Component } from 'react';
import ToDoList from './ToDoList';
import AddTask from './AddTask';
import shortid from 'shortid';
import FilterTasks from './FilterTasks';
import Modal from '../Modal/Modal';

import { ReactComponent as PlusIcon } from '../icons/plus.svg';
import IconButton from '../IconButton/IconButton';

class ToDoListSection extends Component {
  state = {
    filter: '',
    todos: [],
    showModal: false,
  };

  componentDidUpdate(prevState) {
    const nextTodos = this.state.todos;
    const prevTodos = prevState.todos;
    if (nextTodos !== prevTodos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (todos) {
      this.setState({ todos: todos });
    } else {
      this.setState({
        todos: [
          { id: 'id1', text: 'something good' },
          { id: 'id2', text: 'something cool' },
          { id: 'id3', text: 'something for fun' },
          { id: 'id4', text: 'something weird' },
        ],
      });
    }
  }

  deleteTodo = todoId => {
    this.setState(prevState => ({ todos: prevState.todos.filter(todo => todo.id !== todoId) }));
  };

  toggleCompleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    }));
  };

  addTodo = text => {
    if (text.trim() !== '') {
      const todo = { id: shortid.generate(), text, completed: false };
      this.setState(({ todos }) => ({ todos: [todo, ...todos] }));
    }
    this.toggleModal();
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normilizedFilter = filter.toLowerCase();
    return todos.filter(todo => todo.text.toLowerCase().includes(normilizedFilter));
  };

  calcCompletedTasks = () => {
    const { todos } = this.state;
    return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { todos, filter, showModal } = this.state;
    const completedTodosNumber = this.calcCompletedTasks();

    const visibleTodos = this.getVisibleTodos();

    return (
      <section className="ListContainer">
        <IconButton onClick={this.toggleModal} aria-label={'Add ToDo task'}>
          <PlusIcon fill="white" />
        </IconButton>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <AddTask onSubmit={this.addTodo} />
            <button type="submit" onClick={this.toggleModal}>
              CLOSE MODAL
            </button>
          </Modal>
        )}
        <h2>TO DO LIST</h2>
        <ToDoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onDone={this.toggleCompleted}
        />
        <div>
          <p>Total number of tasks: {todos.length}</p>
          <p>Number of completed tasks: {completedTodosNumber}</p>
        </div>
        <FilterTasks filter={filter} onChange={this.changeFilter} />
      </section>
    );
  }
}

export default ToDoListSection;

import './ToDoList.css';
import { Component } from 'react';
import ToDoList from './ToDoList';
import AddTask from './AddTask';
import shortid from 'shortid';
import FilterTasks from './FilterTasks';

class ToDoListSection extends Component {
  state = {
    filter: '',
    todos: [],
  };

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

  componentDidUpdate(prevState) {
    console.log('Component upd');
    if (this.state.todos !== prevState.todos) {
      console.log('Tasks updated');
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

  render() {
    const { todos, filter } = this.state;
    const completedTodosNumber = this.calcCompletedTasks();

    const visibleTodos = this.getVisibleTodos();

    return (
      <section className="ListContainer">
        <h2>TO DO LIST</h2>
        <AddTask onSubmit={this.addTodo} />
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

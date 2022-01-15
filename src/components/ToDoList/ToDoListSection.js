import './ToDoList.css';
import { Component } from 'react';
import ToDoList from './ToDoList';
import AddTask from './AddTask';
import shortid from 'shortid';
import FilterTasks from './FilterTasks';

class ToDoListSection extends Component {
  state = {
    filter: 'some',
    todos: [
      { id: 'id-1', text: 'ToDo 1 ToDo 1 ToDo 1 ToDo 1 ToDo 1', completed: false },
      {
        id: 'id-2',
        text: 'ToDo 2 ToDo 2 ToDo 2 ToDo 2 ToDo 2 ToDo 2 ToDo 2 ToDo 2 ToDo 2 ToDo 2 ToDo 2 ToDo 2 ',
        completed: false,
      },
      { id: 'id-3', text: 'ToDo 3 ToDo 3 ToDo 3 ToDo 3 ', completed: true },
    ],
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
    console.log(text);
    const todo = { id: shortid.generate(), text, completed: false };
    this.setState(({ todos }) => ({ todos: [todo, ...todos] }));
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

import ToDo from './ToDo';

const ToDoList = ({ todos, onDeleteTodo, onDone }) => {
  return (
    <ul>
      {todos.map(({ id, text, completed }) => (
        <li className="ListItem" key={id}>
          <ToDo
            text={text}
            completed={completed}
            onDeleteTodo={() => onDeleteTodo(id)}
            onDone={() => onDone(id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;

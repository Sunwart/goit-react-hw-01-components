const ToDoList = ({ todos, onDeleteTodo, onDone }) => {
  return (
    <ul>
      {todos.map(({ id, text, completed }) => (
        <li className="ListItem" key={id}>
          <button className="closeBtn" type="button" onClick={() => onDeleteTodo(id)}>
            x
          </button>
          <p className={completed ? 'ListItem--completed' : ' '} onClick={() => onDone(id)}>
            {text}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;

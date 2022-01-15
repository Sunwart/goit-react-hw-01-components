import './ToDoList.css';

const ToDoList = ({ todos, onDeleteTodo }) => {
  return (
    <section className="ListContainer">
      <h2>TO DO LIST</h2>
      <ul>
        {todos.map(({ id, text }) => (
          <li className="ListItem" key={id}>
            <button className="closeBtn" type="button" onClick={() => onDeleteTodo(id)}>
              x
            </button>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ToDoList;

const ToDo = ({ text, completed, onDeleteTodo, onDone }) => (
  <>
    <button className="closeBtn" type="button" onClick={onDeleteTodo}>
      x
    </button>
    <p className={completed ? 'ListItem--completed' : ' '} onClick={onDone}>
      {text}
    </p>
  </>
);

export default ToDo;

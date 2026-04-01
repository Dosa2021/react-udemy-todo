export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;

  return (
    <div className="iomplete-area">
      <p>完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            // Note: key?
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
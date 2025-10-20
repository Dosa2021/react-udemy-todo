export const InputTodo = (props) => {
  const { todoText, onChangeText, onClickAdd } = props;

  return (
    <div className="input-area">
      <input type="text" placeholder="TODOを入力" value={todoText} onChange={onChangeText} />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};
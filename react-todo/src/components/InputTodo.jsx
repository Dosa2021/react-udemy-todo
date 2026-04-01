export const InputTodo = (props) => {
  const { todoText, onChangeText, onClickAdd, disabled } = props;

  return (
    <div className="input-area">
      <input disabled={disabled} type="text" placeholder="TODOを入力" value={todoText} onChange={onChangeText} />
      <button disabled={disabled} onClick={onClickAdd}>追加</button>
    </div>
  );
};
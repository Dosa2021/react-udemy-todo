import './App.css';

export const App = () => {
  return (
    <div className="container">
      <div className="input-area">
        <input type="text" placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p>未完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>
              <p>TODOです</p>
              <button>完了</button>
              <button>削除</button>
            </li>
          </div>
          <div className="list-row">
            <li>
              <p>TODOです</p>
              <button>完了</button>
              <button>削除</button>
            </li>
          </div>
        </ul>
      </div>
      <div className="iomplete-area">
        <p>完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>
              <p>TODOです</p>
              <button>完了</button>
              <button>削除</button>
            </li>
          </div>
          <div className="list-row">
            <li>
              <p>TODOです</p>
              <button>完了</button>
              <button>削除</button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  )
}


import './App.css';
import {useState} from "react";

function App() {
  const [inp,setInput] = useState("");
  const [todos,setTodos] = useState([]);
  function addToList(ev) {
      ev.preventDefault();
      setTodos([...todos,inp]);
      setInput("")
  }

  return (
    <div className="App">
      <div className="form container">
        <div className="inp">
            <form onSubmit={addToList}>
                <input type="text" value={inp} onInput={(e)=>{setInput(e.target.value)}}/>
            </form>

        </div>
        <div className="list-area">
          <div className="list">
            {
              todos.map((todo,index)=>{
                return <div className="list-item">
                  <span className="data" key={index}>{todo}</span>
                </div>
              })
            }

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

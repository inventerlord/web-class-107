import './App.css';
import {useState} from "react";

function App() {
  const [inp,setInp] = useState("");
  return (
    <div>
      <input type="text" onInput={(e)=>{setInp(e.target.value)}} />
      <p>{inp}</p>
    </div>
  );
}

export default App;

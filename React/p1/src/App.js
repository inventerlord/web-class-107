import './App.css';
import Message from "./components/Message";

function App() {
  return (
    <div>
      <Message title="London Message" msg="I am from London" by="ALI"/>
      <Message title="Pakistan Message" msg="I am from Pakistan" by="Salmaan"/>
      <Message title="Iraq Message" msg="I am from Iraq" by="Zargham"/>
    </div>
  );
}

export default App;

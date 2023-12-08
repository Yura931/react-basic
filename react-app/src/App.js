import Button from './components/Button';
import styled from "./App.module.css";
import { useEffect, useState } from 'react';

function App() {
 const [toDo, setToDo] = useState("");
 const [toDos, setToDos] = useState([]);
 const onChange = (event) => {
  setToDo(event.target.value)
 }
 const onSubmit = (event) => { 
  event.preventDefault();
  if (toDo === "") {
    return;
  }
  // 현재 배열에 새로운 값을 추가하는 로직
  // ...currentArray 배열복사
  setToDos((currentArray) => [toDo, ...currentArray]);
  setToDo("");
}
console.log(toDos);

  return (
    <div className="App">
        <form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={toDo} 
            type="text" placeholder="Write your to do..." />
            <button>Add To Do</button>
        </form>
        <hr />
        <ul>
          {
            toDos.map((todo, index) => <li key={index}>{todo}</li>)
          }
        </ul>
    </div>
  );
}

export default App;

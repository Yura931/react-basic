import Button from './components/Button';
import styled from "./App.module.css";
import { useEffect, useState } from 'react';

function App() {
  // React.js
  // 새로운 데이터가 들어올 때 UI를 변경하기 위해 refresh가 일어남
  // component 안에서 상황에 맞게 실행되도록 해야하는 경우
  // useEffect() 사용

  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {setCounter((prev) => prev + 1)};

  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  const iRunOnlyOnce = () => {
    console.log("CALL THE API....");
  };

  // 처음 렌더링 되었을 때 한 번만 실행되도록 할 수 있음.
  // useEffect의 두번째 인자값을 잘 사용하자.
  useEffect(() => { 
    iRunOnlyOnce();
  }, []);

  // keyword가 변화할 때에만 실행
  // counter의 상태 변경은 감지하지 않음
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log(`SEARCH FOR ${keyword}`);
    }
  }, [keyword]);

  // counter가 변화할 때에만 실행
  // keyword의 상태 변경은 감지하지 않음
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  
  // counter, keyword가 변화할 때에 실행
  useEffect(() => {
    console.log("I run when keyword & counter.");
  }, [counter, keyword])

  const Hello = () => {
    // Hello Component가 실행될 때만 작동
    useEffect(() => {
    
      console.log("created :)");
      // Component가 destroy될 때 작동
      return () => console.log("destroyed :(");
    }, []);
    return (<h1>Hello</h1>)
  }

  const [showing, setShowing] = useState(false);
  const showClick = () => {setShowing((prev) => !prev)};
  return (
    <div className="App">
      <input onChange={onChange} value={keyword} type="text" placeholder="Search here..." />
      <h1 className={styled.title}>{counter}</h1>
      <Button text={"click me"} onClick={onClick} />

      {showing ? <Hello /> : null}
      <button onClick={showClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;

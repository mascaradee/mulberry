import { useState, useEffect } from "react";

/**
 *  목표
 *  effect를 배워보자
 *  첫 렌더링 이후 state가 변해도 추가 렌더링이 없게 해 보자
 *  특정 state 변화가 있거나 혹은 특정 조건일 때만 렌더링이 되도록 해 보자
 * 
 * TIP
 * useEffect(f, []) 인자 2개인걸 맞추지 않으면 제대로 작동하지 않음 
 * 2번째 인자의 배열에 값이 없을때는 1번만 실행
 * 값이 있을때는 그 값의 state가 변경될때마다 실행
 * 
 */

 function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log('I run only once.');
  },[]);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log('I run when "keyword" changes.');
    }
  }, [keyword]);
  useEffect(() => {
      console.log('I run when "counter" changes.');
  }, [counter]);
  useEffect (() => {
    console.log('I run when keyword & counter change');
  }, [keyword, counter]);
  return (
    <div>
      <input 
        value={keyword} 
        type="text" 
        placeholder="Search me" 
        onChange={onChange}
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}


export default App;

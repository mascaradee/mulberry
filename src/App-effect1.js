import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

/**
 *  목표
 *  effect를 배워보자
 *  첫 렌더링 이후 상태가 변해도 추가 렌더링이 없게 해 보자
 * 
 * TIP
 * useEffect(f, []) 인자 2개인걸 맞추지 않으면 제대로 작동하지 않음 
 * 
 */

 function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log('i run all the times.');

  // 첫 렌더링에만 포함된다. 
  useEffect(
    () => console.log('call an api'), 
    []
  );
  
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

// function App1() {
//   const [counter, setValue] = useState(0);
//   const onClick = () => setValue((prev) => prev + 1);
//   return (
//     <div>
//       <h1 className={styles.title}>Welcome back</h1>
//       <Button text={"Continue"}/ >
//     </div>
//   );
// }

export default App;

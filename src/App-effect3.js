import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

/**
 * 목표
 * effect에 return을 이용해서 컴포넌트가 destroy 될떄를 알수 있다.
 * 
 * TIP
 * JSX 안에서 스크립트를 쓰고 싶으면 {}로 감싸라
 * 컴포넌트가 사라지는 시점에 뭔가를 하고 싶으면 effet의 return에 함수를 반환해라.
 * 
 */

function Heloo () {
  useEffect(() => { 
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  return <h1>Heloo</h1>;
  // 별도 funciton을 선언해서 이용
  // function byeFn() {
  //   console.log("bye :(");
  //   return hiFn;
  // }
  // function hiFn() {
  //   console.log("created :)");
  //   return byeFn;
  // }
  // useEffect(hiFn, []);
  // return <h1>Heloo</h1>;

  // Cleanup function 이용
  // useEffect(() => {
  //   console.log("created :)");
  //   return () => console.log("destroyed"); // Cleanup function : 컴포넌트가 destroyed 될때 실행
  // } , []);
  // return <h1>Heloo</h1>;
} 
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) =>!prev);
  return (
    <div>
      {showing ? <Heloo /> : null}
      <button onClick={onClick}>{showing ? 'Hide': 'Show'}</button>   
    </div>
  );
}


export default App;

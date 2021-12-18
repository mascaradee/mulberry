import { useState } from "react";

/**
 * 목표
 * 리스트에 값 담는 방법을 알자
 * 리스트의 아이템을 한번에 바꾸는 방법은?
 * 
 * TIP
 * 배열의 값을 가져오고 싶으면, '...' 추가
 * const food = [1,2,3]
 * [6, 1,2,3]으로 만들기 위해서는 
 * [6, ...food] 하면 끝남!
 * 
 * setState() 함수의 첫번째 인자는 현재 state를 반환
 * 
 * Event.preventDefault()
 *  어떤 이벤트를 명시적으로 처리하지 않은 경우, 해당 이벤트에 대한 사용자 에이전트의 기본 동작을 실행하지 않도록 지정
 * => 아래에서는 submit을 무효화 하는 방법으로 사용한듯
 */

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(toDo);
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  }
  console.log(toDos);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} 
          type="text" 
          placeholder="Write your todo" 
        />
        <button>Add To Dos</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}


export default App;

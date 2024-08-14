
import { useState } from "react";
import { useInputValue } from ./ MyHook


//1. Hook는 함수 컴포넌트 혹은 Custom Hook안에서만 호출 가능하다.
// const [count, setCount] = useState(0);  
// -> 오류 : Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:

// const myChange = () => {
//   // const [state, setState] = useState(0);
//   //Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:   // 후크 콜은 함수 안에서 해야함 . 
// }
// function getInputValue() {



function MyHook(props) {
  const [input, myChange] = useInputValue();
  //Hook는  조건문이나 반복문 네부에서 호출할수 없다.
  // if (true) {
  //   const [state, setState] = useState(0);
  // }
  // 3. 나만의 Hook를 만들 수 있다. 이 때 반드시 usseXxx() 로 시작하지 않아도 되지만 권장은  useXxx()로 시작하면 다른 Hook와 같다.
  return (
    <div>
      <input type="text" onChange={myChange} value={input} />
    </div>
  );
}

export default MyHook;
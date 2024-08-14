// import React, { useState } from 'react';
import { useState, useRef } from 'react';

//1.useRef vs uesState 
// 1)useState : 값이 유자 , 값이 변경되면 견경된 값 기준으로 화면 리렌더링 한다.
// 2)useRef : 값이 변경되어도 화면의 갱신 작업을 하지 않는다. 즉, 값만 병경되고 화면 유지된다.
const MyCompnent = () => {
  const [count, setCount] = useState(0);
  const useRefObj = useRef(0);
  // console.log(useRefObj)
  console.log('useRef 랜더링');
  console.log('useState 랜더링');

  return (
    <div>
      <h1>Count : {count} </h1>
      <button onClick={() => setCount(count + 1)} >State : Count Up</button>

      <h1>useRef Count : {useRefObj.current} </h1>
      <button onClick={() => {
        setCount(useRefObj.current++)

      }}>Ref : Count Up</button>
    </div>
  );
};

export default MyCompnent;
import { useState } from 'react'
import MyState from './components/MyState';
// import './App.css'


// 1. State가 변경되면 화면이 re-rendering 된다 .
// 2. 부모 캄포넌트에서 자식 컴포넌트로 데이터를 전달하는 props와 달리, state는 자식 컴포넌트에서만 사용할 수 있는 전역변수이다.
// 3. state가 여러개일 경우 계속 re-rendering 이 발생하기 때문에 분리해야 한다. 
function App() {

  console.log('update');
  return (
    <>
      <MyState />

    </>
  )
}

export default App

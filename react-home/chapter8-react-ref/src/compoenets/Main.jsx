import React from 'react';
import { useRef } from 'react';

function Main(props) {
  const nameRef = useRef();
  const onsubmit = () => {
    // const name = document.querySelector('#username').value;
    // const name = nameRef.current.value
    if (nameRef.current.value === '') {
      nameRef.current.style.backgroundColor = 'yellow'
      nameRef.current.focus();
    }
    // console.log(name);
  }
  return (
    <div>
      Name : <input type="text" ref={nameRef} /><br />
      <input type="button" value="Submit" onClick={onsubmit}></input>

    </div>
  );
}

export default Main;
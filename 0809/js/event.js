window.addEventListener('load', init, false);
//HTML 의 모든 Element가 메모리에 로딩한 후 
function init() {
  const button = document.getElementsByTagName('button')[0]
  button.addEventListener('click', myClick, false);
}


function myClick(abc) {
  console.log(abc);
}




window.addEventListener('load', init, false);
function init() {
  // const original = document.querySelector('#original');
  // original.addEventListener('change', myChange,false);
  const email = document.querySelector('#email');
  email.addEventListener('change', myChange, false);
}

function myChange(evt) {
  // console.log(evt.target.value);
  // document.querySelector('#target').value = evt.target.value;
  const user = evt.target.value; //유저가 입력한 값 
  const regex = new RegExp('([a-z0-9]+@[a-z]+\.[a-z]{2,3})');
  if (regex.test(user)) { //유저가 제대로 이메일을 입력했다면 
    document.body.style.backgroundColor = 'yellow';
    alert('Success');
  } else {  //그렇지 않다면 
    document.body.style.backgroundColor = 'red';
    alert('Failure')
  }

}
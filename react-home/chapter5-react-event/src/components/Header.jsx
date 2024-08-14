//Components는 Tag를 Return 하는 함수 

//1. Javascrip event에서는 DOM Level2  사용을 권장했으나 
// React 에서는 DOM Level 0의 inline 방식을 권장한다. 다만 , onclick이 아니라 ocClick이다. 
const Header = (props) => {
  const clickHandler = (evt) => {  //event handler
    console.log(evt);
    //SyntheticBaseEvent  합성 이벤트 발생 
  }
  return (

    <>
      <header>
        {/* <h1 onClick={clickHandler}>{props.title}</h1> */}
        <h1> {props.title} </h1>
      </header>
    </>


  );
};

export default Header;
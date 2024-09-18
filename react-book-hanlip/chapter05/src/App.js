import './App.css';
import Body from './components/Body';

const Header = () => {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
}

function ChildComp() {
  return <div> child component </div>;
}



function App() {
  // const BodyProps = {
  //   name:"홍인표123",
  //   location: "서울시 구로구 ",
  // favorList:["파스타", "빵", "감자"],
  // };
  return (
    <div className="App">
      <Header />
      <Body>

        {/* <ChildComp/>  */}
      </Body>
      {/* <Body {...BodyProps}/> */}
    </div>
  );
}

export default App;

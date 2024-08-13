
const Nav = (props) => {
  const lists = [];
  for (let i = 0; i < props.topics.lenght; i++) {
    let topic = props.topic[i];
    //   lists.push(<li key={topic.id}> <a href= ('/read/' + topic.id) > {topic.title} </a ></li >);
    // }
  }
  return (

    <>
      <nav>
        <ol>
          {lists}
        </ol >
      </nav >
    </>

  );
};

export default Nav;
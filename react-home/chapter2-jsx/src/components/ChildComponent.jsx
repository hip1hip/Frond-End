//테그를 리턴하면 컴포넌트
function childComponent() {
  return (
    <div>
      <h3>Child Component</h3>
      <img src="images/vue.png" />
      {/* 반드시 이미지스 폴더는 public 폴더 하위에  */}
    </div>
  );
}

export default childComponent;
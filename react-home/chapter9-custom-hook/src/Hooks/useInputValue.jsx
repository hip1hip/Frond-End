import

  function useInputValue() {

    const [input, setInput] = useState(0);

    const myChange = (evt) => {
      evt.target.value
      console.log(input);
    }
    return [input, myChange];
  }
export default useInputValue;
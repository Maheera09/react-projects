import { useSelector } from "react-redux";

function DisplayCounter() {
  const counter = useSelector((store) => store.counter);

  return <p>Counter Current Value: {counter}</p>;
}

export default DisplayCounter;

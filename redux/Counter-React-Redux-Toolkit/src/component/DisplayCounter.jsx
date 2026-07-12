import { useSelector } from "react-redux";

function DisplayCounter() {
  const { counterVal } = useSelector((store) => store.counter);

  return <p>Counter Current Value: {counterVal}</p>;
}

export default DisplayCounter;

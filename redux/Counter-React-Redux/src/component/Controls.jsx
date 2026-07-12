import { useRef } from "react";
import { useDispatch } from "react-redux";

function Controls() {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };

  const handlePrivacy = () => {
    dispatch({ type: "PRIVACY" });
  };

  return (
    <>
      <button onClick={handleIncrement} type="button">
        +1
      </button>
      <button onClick={handleDecrement} type="button">
        -1
      </button>
      <button onClick={handlePrivacy} type="button">
        Hide/Show
      </button>

      <input
        style={{ width: "200px" }}
        type="text"
        ref={inputElement}
        placeholder="Enter number:"
      />

      <button onClick={handleAdd} type="button">
        +
      </button>
      <button onClick={handleSubtract} type="button">
        -
      </button>
    </>
  );
}

export default Controls;

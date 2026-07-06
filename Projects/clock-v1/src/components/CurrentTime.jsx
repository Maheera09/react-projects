import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function CurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("started");

    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
      console.log("interval ended");
    };
  }, []);

  return (
    <p>
      The current time is: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
}

export default CurrentTime;

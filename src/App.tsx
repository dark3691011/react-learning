// import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./conponents/ComponentA";
import ComponentB from "./conponents/ComponentB";
import React, { useState } from "react";

function App() {
  let mangA = [1, 2, 3, 4, 5, 6, 7];
  //const [count, setCount] = useState(0);

  return (
    <div>
      ABC
      {/* <ComponentA name="cc" /> */}
      <ComponentB />
      {/* {mangA.map((item, i) => {
        return (
          <div>
            {i}. Concac {item}
          </div>
        );
      })} */}
    </div>
  );
}

export default App;

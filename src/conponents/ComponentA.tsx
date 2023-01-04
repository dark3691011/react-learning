import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ComponentA.css";

import { counterAction } from "../store/couter";

function ComponentA({}) {
  const [fruit, setFruit] = useState("chuối");

  const counter = useSelector((state: any) => state.counter.counter);

  const dispatch = useDispatch();

  let abc = () => {
    dispatch(counterAction.increament());
  };

  useEffect(() => {}, []);

  return (
    <div>
      componentA {counter}
      <button onClick={() => abc()}>ABC</button>
    </div>
  );
}

export default ComponentA;

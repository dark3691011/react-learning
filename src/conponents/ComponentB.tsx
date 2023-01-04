import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ComponentA.css";

import { todoListAction } from "../store/todo-list";

function ComponentB() {
  
  const todoList = useSelector((state: any) => state.todoList);
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  const onClickBtn = () =>{
    dispatch(todoListAction.addTodo(text));
    setText('');
  }
  
  const onClickBtn2 = (item: any) =>{
    dispatch(todoListAction.removeTodo(item));
  }

  return <>
    <div>
      <input id="text" onChange={(e) => {setText(e.target.value)} } value={text}/>
      <button onClick={onClickBtn}>cc</button>
    </div>
    <div>
      {todoList.map((e : any, index: number)=> {
        return <div key={e.id + text + index}>
        <p>{e.text}</p>
        <button onClick={() => {onClickBtn2(e)}}>cc</button>
        </div>
      })}
    </div>
  </>;
}

export default ComponentB;

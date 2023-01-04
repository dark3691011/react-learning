import { createSlice } from "@reduxjs/toolkit";

// const inittialState = {
//   id: 1,
//   text : null,
//   status : todo
// };

const inittialState: Array<any> = [];

const todoListSlice = createSlice({
  name: "todoList",
  initialState: inittialState,
  reducers: {
    addTodo(state, action) {
      return [...state,{
          id: Math.floor(Math.random() * 1000000),
          text : action.payload,
          status : 'todo'
        }]
    },
    removeTodo(state, action){
      let inputVal = action.payload;
      let tmp = [...state]
      tmp.splice(tmp.findIndex(e => e.id === inputVal.id && e.text === inputVal.text), 1);
      return tmp;
    }
  },
});

export const todoListAction = todoListSlice.actions;

export default todoListSlice.reducer;

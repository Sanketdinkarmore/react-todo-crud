import React from 'react'
import { useState } from 'react'

function TodoInput(props) {
  const {handleAddTodo,setTodoValue,todoValue}=props

  return (
    <header>
      <input
      value={todoValue}
      onChange={(e)=>{
        setTodoValue(e.target.value);
      }}
       placeholder='enter the todo....'/>
      <button onClick={()=>{
        handleAddTodo(todoValue)
        setTodoValue('')
      }}>Add</button>
    </header>
  )
}

export default TodoInput

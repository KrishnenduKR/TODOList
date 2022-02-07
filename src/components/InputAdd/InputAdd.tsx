import React, { useState } from 'react';
import './InputAdd.css'

interface IInputAddProps {
    addNewitem : Function
}

const InputAdd = ({addNewitem}: IInputAddProps) => {
    const [toDoInput,setToDoInput] = useState("")
    const inputChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        event.preventDefault()
        setToDoInput(event.target.value)
    }

    const addItem = (event: React.MouseEvent<HTMLElement>)=>{
        event.preventDefault()
        addNewitem(toDoInput)
    }
  return <div>
      <form className='input-add'>
        <input name='to-do-input' placeholder='What you want to do?' value={toDoInput} onChange={inputChange}></input>
        <button onClick={addItem}>Add</button>
      </form>
  </div>;
};

export default InputAdd;

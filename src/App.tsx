import React, { useState } from 'react';
import './App.css';
import InputAdd from './components/InputAdd/InputAdd';
import List from './components/List/List';

function App() {
  const [toDoList,setToDoList] = useState<Array<string>>([])

  const addItem = (item:string) => {
    setToDoList((currentItems: string[])=>{
      return [...currentItems,item]
    })
  }

  const deleteItem = (id:number) =>{
    console.log('delete',id)
    setToDoList(toDoList.filter((_,index)=>id !== index))
  }

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <InputAdd addNewitem={addItem} ></InputAdd>
      {toDoList.length ? 
        toDoList.map((item,index)=>{
          return <List key={index} toDoItem={item} deleteItem={ ()=>{deleteItem(index)}} ></List>
        }) : <h2>No items added...!</h2>
      }
      
    </div>
  );
}

export default App;

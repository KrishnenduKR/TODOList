import React from 'react';

interface ItoDoListProps{
    toDoItem : string,
    deleteItem : Function
}

const List = ({toDoItem, deleteItem}: ItoDoListProps) => {

  return <div className='list'>
    <p>{toDoItem}</p>
    <button onClick={(e:React.MouseEvent<HTMLElement>)=>{
        e.preventDefault();
        deleteItem();
    }} >delete</button>
  </div>;
};

export default List;

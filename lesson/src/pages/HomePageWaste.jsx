import React from 'react'
import TodoItem from '../components/TodoItem'
const HomePage = () => {

  const todos =[
    {title : "Playing footbell" , time: "10 : 00"},
    {title : "Playing tenis" , time: "12 : 00"},
    {title : "Reading books" , time: "13 : 00"},
    {title : "Eating food" , time: "16 : 00"}
  ]
  return (
   <section>
     <div className='container'>
      <h1 className='text-center my-3'>Todo list</h1>
      <TodoItem time = " 10 : 00" title = "Playing footbal"/>
      <TodoItem time = " 12 : 00" title = "Playing tenis"/>
      <TodoItem time = " 13 : 00" title = "Reading books"/>
      <TodoItem time = " 16 : 00" title = "Eating food"/>
    </div>
   </section>
  )
}

export default HomePage
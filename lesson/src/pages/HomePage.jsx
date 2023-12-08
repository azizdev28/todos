import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TodoItem from '../components/TodoItem'
const HomePage = () => {

  const todos =[
    {title : "Playing footbell" , time: "10 : 00"},
    {title : "Playing tenis" , time: "12 : 00"},
    {title : "Reading books" , time: "13 : 00"},
    {title : "Eating food" , time: "16 : 00"}
  ]
  const mappingTodos  = todos.map((todo , i)=> <TodoItem key = {i} title = {todo.title} time = {todo.time }/>)
  console.log(mappingTodos)
  return (
   <section>
     <div className='container'>
      <h1 className='text-center my-3'>Todo list</h1>
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Tab content for Profile
      </Tab>
      
    </Tabs>
      {mappingTodos}
    </div>
   </section>
  )
}

export default HomePage
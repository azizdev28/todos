import React, { useReducer, useState } from 'react';

// Reducer funktsiyasi
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
      case 'EDIT_TODO':
        return state.map(todo =>
          todo.id === action.payload.id ? { ...todo, ...action.payload.data } : todo
        );
      
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoList = () => {
  // useReducer orqali state va dispatch olish
  const [todos, dispatch] = useReducer(todoReducer, []);
  
  // Input qiymatlari uchun lokal state lar
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  // Yangi todo qo'shish
  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      title,
      description,
      deadline
    };

    dispatch({ type: 'ADD_TODO', payload: newTodo });

    // Inputlarni tozalash
    setTitle('');
    setDescription('');
    setDeadline('');
  };

  // Todo ni o'zgartirish
  const editTodo = (id, data) => {
    dispatch({ type: 'EDIT_TODO', payload: { id, data } });
  };
  

  // Todo ni o'chirish
  const deleteTodo = id => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  return (
    <div className='todos container'>
      <h1 className='h2'>Todo List</h1>
      
      <div className='addTodo '>
        <h2 className='h3'>Add New Todo</h2>
        <label>Title: </label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder='Reading book' />
        <br />
        <label>Description: </label>
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder='10 pages' />
        <br />
        <label>Deadline: </label>
        <input type="text" value={deadline} onChange={e => setDeadline(e.target.value)} placeholder='10 hoursn' />
        <br />
        <button className='btn btn-primary' onClick={addTodo}>Add Todo</button>
      </div>
      <ul className='d-flex align-items-centar  gap-3 '>
        {todos.map(todo => (
          <li key={todo.id}>
            <div className='card card-body'>
              <strong>{todo.title}</strong>
              <p>{todo.description}</p>
              <p>Deadline: {todo.deadline}</p>
            </div>
            <div className='d-flex gap-2'>
              <button className='btn btn-primary' onClick={() => editTodo(todo.id, { title: 'Updated Title' })}>
                Edit
              </button>
              <button className ='btn btn-primary' onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

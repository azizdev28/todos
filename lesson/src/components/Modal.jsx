import React, { useState } from 'react'

const Modal = () => {

const [active , setActive] = useState(false)

const toggleActive = () =>{
    setActive(!active)
}



  return (



    <div className='modalComponent container'>
        <h1>
            Modal
        </h1>

        <div className= {active ? "modal" : "modalActive"}>
            <h3>Modal window</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt magnam deleniti aliquid voluptas pariatur dolorum provident necessitatibus iste distinctio quae tenetur sint, delectus similique minus ipsa explicabo rem officia modi!</p>
          <button className='modalX' onClick={toggleActive}>X</button>
        </div>
       <div className='modalBtn'>
        <button className='btn' onClick={toggleActive}>
            Modal
        </button>
       </div>
    </div>
  )
}

export default Modal
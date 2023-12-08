import PropTypes from 'prop-types';

const TodoItem = (props) => {
  
    const {title ,time} = props
  return (
    <div className=' d-flex justify-content-between align-items-center alert alert-primary'>
    <div>
   <h2> {title}</h2>
   <p>{time}</p>

    </div>
    <button className=' btn btn-success'>Done</button>
      </div>
  )
  TodoItem.protoType ={
    title:PropTypes.string,
    time:PropTypes.number
  }
}

export default TodoItem
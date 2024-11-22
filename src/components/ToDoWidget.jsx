import React from 'react'
import '../css/ToDoWidget.css'
import jaipur from '../images/jaipur.jpg'

function ToDoWidget() {


  return (

    <div className="widget-container">
      
      <img src={jaipur} className='widget-img' alt='' />

        <div className="things-todo">
          <div className="todo-title">Top 5 things to see in Jaipur</div>
          <div className="todos">
          <div className="todo">• Amer Fort</div>
          <div className="todo">• Hawa Mahal</div>
          <div className="todo">• Jal Mahal</div>
          <div className="todo">• City Palace</div>
          <div className="todo">• Jantar Mantar</div>
          </div>
        </div>

    </div>

  )
}

export default ToDoWidget
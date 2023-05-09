import React from 'react'

const TodoList = (props) => {
  return (
    <div className="flex flex-row py-2">
      <li className="text-xl font-semibold">{props.number}.</li>
      <li className="text-xl font-semibold">{props.text}</li>
      <div
        className="text-xl mx-2 cursor-pointer"
        onClick={() => {
          props.onSelect(props.id)
        }}
      >
        ❌
      </div>
    </div>
  )
}

export default TodoList

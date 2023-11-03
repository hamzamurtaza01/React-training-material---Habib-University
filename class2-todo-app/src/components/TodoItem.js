import React from "react"

function TodoItem(props) {
    return (
        <div style={{ border: "1px grey solid", padding: 4 }}>
            <p>{props.todo}</p>

            <button onClick={() => props.removeTodo(props.todo)}>delete</button>
        </div>
    )
}

export default TodoItem

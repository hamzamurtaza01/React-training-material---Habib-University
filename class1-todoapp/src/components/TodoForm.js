import { useState } from "react"

function TodoForm() {
    const [todoList, setTodoList] = useState([])
    const [newTodoText, setNewTodoText] = useState("")

    function handleChange(event) {
        const value = event.target.value
        setNewTodoText(value)
    }

    function addNewTodo() {
        const copyTodoList = [...todoList]
        copyTodoList.push(newTodoText)
        setTodoList(copyTodoList)
        setNewTodoText("")
    }

    console.log(todoList) // This statement will be executed on every re-render since this is outside of any function (i.e it is in the component scope directly)

    return (
        <div className="App">
            <p>Add new items here:</p>
            <input type="text" value={newTodoText} onChange={handleChange} />

            <button onClick={addNewTodo}>Add Todo</button>

            {/* @TODO: Display a list of all todos here */}
        </div>
    )
}

export default TodoForm

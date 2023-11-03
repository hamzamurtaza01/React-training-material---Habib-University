import { useState, useEffect } from "react"
import TodoItem from "./TodoItem.js"

function TodoForm() {
    const [todoList, setTodoList] = useState([])
    const [newTodoText, setNewTodoText] = useState("")

    // This is an arrow function
    // () => {}

    // General syntax of useEffect hook and what parameters it accepts
    // useEffect(callbackFunction, dependencyArray)

    // Hence when combined, an empty useEffect hook looks like this
    useEffect(() => {}, [])

    // --------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------

    useEffect(() => {
        // runs only once, when a component is mounted - the empty dependency array tells it to run on mount
        fetchProductData()
    }, [])

    useEffect(() => {
        // this runs every time the dependency changes
        if (newTodoText !== "") {
            // a condition to prevent the alert from popping up on first render
            alert(
                "Hey! The component updated! Some state or prop must have changed."
            )
        }
    }, [newTodoText])

    useEffect(() => {
        console.log("this runs on every render") // not very useful except for debugging. You can use it to log values of state on each render
    })

    useEffect(() => {
        // this runs when the component is about to unmount (destroy)
        // How does a component unmount? Simple. When a component is rendered conditionally, and the condition now evaluates to false, the component will no longer be there i.e. "unmounted"

        return () => console.log("The component will be unmounted!") // returns a cleanup function, that runs just before the component unmounts
    }, [])

    // --------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------
    // --------------------------------------------------------------------------------

    const fetchProductData = () => {
        fetch("https://fakestoreapi.com/products/1")
            .then((res) => res.json())
            .then((json) => json)
    }

    const handleChange = (event) => {
        const value = event.target.value
        setNewTodoText(value)
    }

    const addNewTodo = () => {
        const copyTodoList = [...todoList]
        copyTodoList.push(newTodoText)
        setTodoList(copyTodoList)
        setNewTodoText("")
    }

    const removeTodo = (delItem) => {
        const copyTodoList = [...todoList]
        const newTodoList = copyTodoList.filter((item) => item !== delItem)
        setTodoList(newTodoList)
    }

    return (
        <div className="App">
            <p>Add new items here:</p>
            <input type="text" value={newTodoText} onChange={handleChange} />

            <button onClick={addNewTodo}>Add Todo</button>

            {/* Conditional rendering of todo list - if there are any items in the list */}
            {todoList.length > 0 ? (
                todoList.map((todo) => {
                    return <TodoItem todo={todo} removeTodo={removeTodo} />
                })
            ) : (
                <p>Nothing here...</p>
            )}
        </div>
    )
}

export default TodoForm

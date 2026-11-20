import { useState } from "react"

export default function AddTask(props) {

    const [task, setTask] = useState("");

    function handleChange(e) {
        setTask(e.target.value)
    }

    function add(e) {
        props.addTask(task)
        // setTask("")
    }
    return (
        <div>
            <input onChange={handleChange} placeholder="Enter your task" value={task} type="text" name="task" />
            <button onClick={add}>Ajouter</button>
        </div>
    )
}
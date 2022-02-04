import React, {useState, useEffect} from "react";


const Form = (props) => {

    const [task, setTask] = useState("");

    const { taskArr, setTaskArr, taskComplete} = props


    // ** Create
    const submitHandler = (e) => {
        e.preventDefault()

        const newTask = {
            task: task,
            taskComplete: taskComplete
        }

        setTaskArr([...taskArr, newTask]);

        setTask("")
    }

    // 
    return(
        <div>
            <h1>To Do List</h1>

            <form onSubmit={submitHandler}>
                <div>
                    <label>New Task: </label>
                    <input type="text" 
                    onChange={ (e) => setTask(e.target.value)}
                    value={task} />
                </div>
                <input type="submit" value="Add Task" />
            </form>


            
        
        </div>
    )

}

export default Form;
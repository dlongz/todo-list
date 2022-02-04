import React from "react";

const List = (props) => {
    const {taskArr, setTaskArr} = props

    // *** Conditional Styling 
    const taskStyleWhenComplete = (index) => {
        if(taskArr[index].taskComplete) {
            return strikeThrough;
            } else {
                return null;
            }
    }
    
    const strikeThrough = {
        
        textDecoration: 'line-through',
        color: 'red' 
    };


    // ** Update
    const handleChecked = (taskIndex) => {
        const updatedTask = [...taskArr];
        updatedTask[taskIndex] = {
            task: updatedTask[taskIndex].task,
            taskComplete: !updatedTask[taskIndex].taskComplete
        }
        setTaskArr(updatedTask)
    }

    // ** Delete
    const detroyTask = (taskIndex) => {
        const filterTasks = taskArr.filter((element, index) => index !== taskIndex)

        setTaskArr(filterTasks)
    }


    return(
        <div>
            <h2>The list</h2>

            {
                taskArr.map((element,index) => {
                    return(
                        <div key={index} > 
                            <div>
                                <p style={taskStyleWhenComplete(index)}>{element.task}</p>
                                <input type="checkbox" checked={element.taskComplete} onChange={(e) => handleChecked(index)}/>
                                <input type="button" value="Delete" onClick={(e) => detroyTask(index)} />
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default List;
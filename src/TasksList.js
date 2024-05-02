import { useState } from "react";
import {addTask, removeTask} from "./tasksSlice";
import { useSelector, useDispatch } from "react-redux";


const TasksList = (props) => {

    const tasks = useSelector((state)=>state.tasksList.tasks);
    const dispatch = useDispatch()

    const [value, setvalue] = useState(" ") 
    const handleChange = (e)=>
    {
        setvalue(e.target.value);
    }
    const handleClick = ()=>
    {
        let taskText = value
        dispatch(addTask(taskText))
        setvalue("")
    }

    return ( 
        <>
        <h1>To Do List</h1><br/>
        <ol>
        {/* {console.log(tasks)} */}
        {
            tasks.map((task)=>
            {
                return (
                <li key={task.id}>
                    {task.text} 
                    <button onClick={()=>dispatch(removeTask(task.id))}>Remove</button>
                </li>
                );
            })
        }
        </ol>
        <br/>
        <h2>Add New Task</h2>
        <input
            value= {value}
            type = "text"
            onChange = {handleChange}
        />
        <button onClick={handleClick}>Done</button>
        
        </>
     );
}

 
export default TasksList;
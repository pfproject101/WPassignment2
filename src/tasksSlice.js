import { createSlice } from "@reduxjs/toolkit"


const tasksSlice = createSlice(
    {
        name: "tasksList",
        initialState:{
            tasks : [],
            count : 0
        },
        reducers:
        {
            addTask(state, action)
            {
                return {
                    ...state,
                    tasks : [...state.tasks, {text:action.payload, id:state.count}],
                    count: state.count+1
                }
            },

            removeTask(state, action)
            {
                state.tasks = state.tasks.filter((task)=>task.id!=action.payload)
                let c = 0
                state.tasks.map((task, idx)=>
                {
                    state.tasks[idx].id = c;
                    c+=1
                })
                state.count-=1
                // return{
                //     ...state,
                //     tasks : state.tasks.filter((task)=>task.id!=action.payload),
                //     count: state.count-1
                // }
            }
        }

    }
)

export const {addTask, removeTask} = tasksSlice.actions;
export default tasksSlice.reducer;
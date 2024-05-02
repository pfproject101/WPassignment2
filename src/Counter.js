import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, incByAmount} from './counterSlice'


const Counter = () => {

    const slice = useSelector((state)=>state.counter)
    const dispatch = useDispatch()


    return (  
        <>
        <h1>Count: {slice.count}</h1>
        <button onClick={() => dispatch(increment())}>increment</button>
        <br/>
        <br/>
        <button onClick={()=> dispatch(decrement())}>decrement</button>
        <br/>
        <br/>
        <button onClick={()=> dispatch(incByAmount({name:'hamna', amount:10}))}>Add 10</button>

        </>
    );
}
 
export default Counter;
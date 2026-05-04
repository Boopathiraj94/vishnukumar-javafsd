import React, { useReducer, useState } from 'react'

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const RESET = 'reset';

let reduFunction = (num, action) => {
    console.log("action => ", action);

    switch (action.type) {
        case INCREMENT:
             return num + 1;      
        case DECREMENT:
             return num - 1;      
        case RESET:
             return 0; 
        default:
            break;
    }
}


const Count = () => {

    //  const [count, setCount] = useState(0)

    const [num, dispatch] = useReducer(reduFunction, 0)

    console.log("num", num);

    return (
        <div>
            {/* Count {count}  <br /> */}
            Count {num}   <br />

            {/* <button onClick={() => setCount(pre => pre + 1)} >Increment</button>
            <button onClick={() => setCount(pre => pre - 1)} >Decrement</button>
            <button onClick={() => setCount(0)} >Reset</button> */}

            <button onClick={() => dispatch({ type: INCREMENT })} >Increment</button>
            <button onClick={() => dispatch({ type: DECREMENT })} >decrement</button>
            <button onClick={() => dispatch({ type: RESET })} >reset</button>

        </div>

    )
}

export default Count
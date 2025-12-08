import React from 'react'
import { useState } from 'react'
import Child from './Child'

export default function Paraent() {
    count [count,setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Parent Component</h1>
              {/* <h1>{propsname}</h1> */}
           <Child custombutton={increment} />
            <h1>{count}</h1>
            <button onClick={increment(count+1)}>Click Me</button>
            
        </div>
    )
}

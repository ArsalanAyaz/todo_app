'use client';
import React, { useState } from "react";


export default function CounterAppAdvanced() {

const [counter, setCounter] = useState(0);

const increment = (kitna = 1) =>{
    console.log("In Increase:")
    setCounter(counter+kitna)
}
const decrement = (kitna = 1) =>{

    console.log("In Decrease:")
    setCounter(counter-kitna)
}

  return (
<div>
    <button onClick={()=>increment(1)}>Increment by 1</button>
    <button onClick={()=>increment(2)}>Increment by 2</button>
    <button onClick={()=>increment(3)}>Increment by 3</button>
    <br />
    {counter}
    <br />
    <button onClick={()=>decrement(1)}>Decrement by 1</button>
    <button onClick={()=>decrement(2)}>Decrement by 2</button>
    <button onClick={()=>decrement(3)}>Decrement by 3</button>
   
</div>
    
  )
};


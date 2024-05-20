import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increamentFunc = () =>{
        setCount(count+1);
        // count += 1;
        console.log(count);
    }
  return (
    <div>
      <p> Counter Example </p>
      <p> Count: {count} </p>
      <button onClick={increamentFunc}> Increase </button>
    </div>
  )
}

export default Counter

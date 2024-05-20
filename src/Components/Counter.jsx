import React from 'react'

const Counter = () => {
    let count = 0;

    const increamentFunc = () =>{
        count += 1;
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

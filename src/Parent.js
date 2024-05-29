import React from 'react'
import MyContext from './MyContext';
import Child from './Child';

const Parent = () => {
    const contextValue = "Hello from Context";
  return (
    <MyContext.Provider value={contextValue}>
        <div>
            Parent Page
            <Child/>
        </div>
    </MyContext.Provider>
  )  
}

export default Parent

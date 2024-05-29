import React, { useContext } from 'react'
import MyContext from './MyContext'

const Child = () => {
    const contextValue = useContext(MyContext);
  return (
    <div>
      <p> {contextValue} </p>
      <p> Child </p>
    </div>
  )
}

export default Child

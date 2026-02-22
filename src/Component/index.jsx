import React from 'react'
import Addition from './addition'
import Substraction from './substraction'
import Multiplication from './multiplication'
import Division from './division'

const calculatorApp = () => {
  return (
    <div>
      <h1>Calculator APP</h1>
      <Addition/>
      <Substraction/>
      <Division/>
      <Multiplication/>
    </div>
  )
}

export default calculatorApp

import React from 'react'
import Addition from './addition'
import Substraction from './substraction'
import Multiplication from './multiplication'
import Division from './division'

const calculatorApp = () => {
  return (
    <div>
            <h1>Calculator APP</h1>
                    <div className="flex justify-center">
                <div className="border-3 border-blue-900 rounded-xl shadow-2xl m-4 w-1/4">
                    <h1 className="bg-blue-900 text-center text-xl text-white rounded-t-md">Calculator App</h1>
                    <div className="flex">
                        <input type="text" className="border-1 border-blue-900 p-3 m-2 text-center w-1/2 rounded-md" placeholder="num1" />
                        <input type="text" className="border-1 border-blue-900 p-3 m-2 text-center w-1/2 rounded-md" placeholder="num2" />
                    </div>
                </div>
            </div>
  
      <Addition/>
      <Substraction/>
      <Division/>
      <Multiplication/>
    </div>
  )
}

export default calculatorApp

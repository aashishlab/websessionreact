import React, { useState } from 'react'
import Addition from './addition'
import Substraction from './substraction'
import Multiplication from './multiplication'
import Division from './division'

const calculatorApp = () => {

    let [num1,setNumber1] =useState(0);
    let [num2,setNumber2] = useState(0);


    // let players=["dhoni","virat","shreyas","hardik"];
    // // let demo =(player_data)
    // // let [capton,coach,...fielders] = players;
    // console.log(fielders) 

  return (
    <div>
            <h1>Calculator APP</h1>
                    <div className="flex justify-center">
                <div className="border-3 border-blue-900 rounded-xl shadow-2xl m-4 w-1/4">
                    <h1 className="bg-blue-900 text-center text-xl text-white rounded-t-md">Calculator App</h1>
                    <div className="flex">
                        <input type="text" onChange={(event)=>setNumber1(event.target.value)} className="border-1 border-blue-900 p-3 m-2 text-center w-1/2 rounded-md" placeholder="num1" />
                        <input type="text" onChange={(event)=>setNumber2(event.target.value)} className="border-1 border-blue-900 p-3 m-2 text-center w-1/2 rounded-md" placeholder="num2" />
                    </div>
                </div>
            </div>
  
      <Addition num1={x} num2= {y} />
      <Substraction num1={x} num2= {y}/>
      <Division num1={x} num2= {y}/>
      <Multiplication num1={x} num2= {y}/>
    </div>
  )
}

export default calculatorApp

import React from 'react'
import { useState } from 'react'

function Create() {
  const [name,setName]=useState('')
  const [ingredeint,setIngredient]=useState("")
  const [method,setMethod]=useState('')
  const [cookingTime,setCookingTime]=useState("")

  const [ings,setIngs]=useState([])
  
  function handleSubmit(target) {
    target.preventDefault()
    if(!ings.includes(ingredeint)){
      ings.push(ingredeint)
      setIngredient('')
    }
  }

  const createdObj =()=>{
    let id= Math.round(Math.random()*100000)
    let objectFunction =(id,title,ings,method,cookingTime)=> {
      return{
        "id": id,
        'title':name,
        'ingredients':ings,
        "method": method,
        'cookingTime': cookingTime
      }
    }
    console.log(objectFunction(id,title,ings,method,cookingTime));
    setName('')
    setIngredient('')
    setMethod('')
    setCookingTime('')
    setIngs([])
  }

  

  

  return (
    <div className='w-96 mx-auto flex flex-col bg-yellow-100 text-black rounded-md p-3 text-xl shadow-md shadow-green-400'>
        <label className='mb-2'>
          <p>Title<span className='text-red-900' >*</span></p>
          <input
            className='border-2 shadow-sm shadow-slate-900 rounded px-1 w-full focus: outline-none focus:border-lime-700 border-gray-400' 
            placeholder='Name' 
            autoComplete='off' 
            required 
            id='title'
            type="text"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
          />
        </label>

        <form className='mb-2' onSubmit={handleSubmit}>
          <label className='mb-2 w-full' htmlFor='ings'>
            <p>Ingredients <span className='text-red-900' >*</span></p>
          </label>
          <div className='flex justify-between gap-2'>
            <input 
              className='border-2 focus: outline-none focus:border-lime-700 border-gray-400 shadow-sm shadow-slate-900 rounded px-1 w-full' 
              placeholder='Ingredient' 
              autoComplete='off' 
              required 
              id='ings' 
              type="text"
              value={ingredeint}
              onChange={(e)=>{setIngredient(e.target.value)}}
            />
            <button className='bg-green-900 px-2 inline-block rounded' type='submit'>Add</button>
          </div>
        </form>

        <label className='w-full' htmlFor='method'>
            <p>Method <span className='text-red-900' >*</span></p>
        </label>

        <textarea 
          required 
          className='border-2 focus: outline-none focus:border-lime-700 border-gray-400 shadow-sm shadow-slate-900 rounded px-1 w-full mb-2 text-base' 
          placeholder='Method...' 
          name="Method" 
          id="method"
          value={method}
          onChange={(e)=>{setMethod(e.target.value)}} 
          >

          </textarea>

        <label className='mb-2'>
          <p>Cooking time <span className='text-red-900' >*</span></p>
          <input 
            className='border-2 focus:outline-none focus:border-lime-700 border-gray-400 shadow-sm shadow-slate-900 rounded px-1 w-full' 
            placeholder='Cooking time' 
            autoComplete='off' 
            required 
            id='cookingTime' 
            type="text" 
            value={cookingTime}
            onChange={(e)=>{setCookingTime(e.target.value)}}
          />
        </label>

        <button 
          onClick={createdObj}
          className='bg-blue-400 font-medium self-center px-3 rounded text-white hover:bg-green-500 active:opacity-70'
          >Submit</button>
    </div>
  )
}

export default Create
import React from 'react'
import { Link } from 'react-router-dom';

function RecipeList({recipes}) {
   
  return (
    <div className='grid grid-cols-3 gap-4'>
        {
            recipes.map((item)=>{
                return (
                    <div className='flex flex-col bg-orange-100 text-black p-3 rounded-lg shadow-lg shadow-green-500/90 durartion:200 hover:rotate-[-15deg]' key={item.id}>
                        <h3 className='text-center text-2xl font-bold mb-2'>{item.title}</h3>
                        <p className='text-center mb-2'> <span className='italic'>{item.cookingTime}</span> ⏳</p>
                        <p className='mb-2'>{item.method.substring(0,100)}...</p>
                        <Link  to={`/recipe/${item.id}`} className='bg-orange-500 p-1 rounded inline-block self-center'>Cook this</Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default RecipeList
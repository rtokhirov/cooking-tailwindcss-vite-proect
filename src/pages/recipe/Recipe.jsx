import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

function recipe() {
  const {id}=useParams()
  const{data:recipe, isPending,error}=useFetch(`http://localhost:3000/recipes/${id}`)
  console.log(recipe);
  return (
      <>
          {recipe &&
              (
                <div className='flex flex-col bg-orange-100 text-black p-3 rounded-lg shadow-lg shadow-green-500/90' key={recipe.id}>
                    <h3 className='text-center text-2xl font-bold mb-2'>{recipe.title}</h3>
                    <p className='text-center mb-2'> <span className='italic'>{recipe.cookingTime}</span> ⏳</p>
                    <div className='mb-3 flex justify-center items-center'>
                      <span className='italic bg-teal-800 p-1 text-white rounded'>Ingredients:</span> 
                      {recipe.ingredients.map((ing)=>{
                        return (
                           <span key={ing}> {ing}</span>
                        )
                      }) }
                    </div>
                    <p className='mb-2'><span className='italic bg-teal-800 p-1 text-white rounded'>Method:</span> {recipe.method}</p>
                </div>
              )
          }
      </>
  )
}

export default recipe
import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'
function home() {
  const {data: recipes,isPending,error}= useFetch('http://localhost:3000/recipes')
    
  return (
    <div>
      { recipes && <RecipeList recipes={recipes} /> }
    </div>
  )
}

export default home
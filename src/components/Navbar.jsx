import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-green-900 px-2'>
      <nav className="flex justify-between text-white max-w-screen-lg mx-auto py-3 items-center">
        <Link to='/' className='text-4xl' >
            <h1>Cooking 🧑‍🍳</h1>
        </Link>
        <Link  className='border p-1 rounded-md hover:bg-white hover:text-black' to='/create'>
            <span className='' >Create Recipe</span>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
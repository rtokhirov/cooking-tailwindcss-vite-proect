import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/search';
import Navbar from './components/navbar';

function App() {

  return (
    <div className='bg-slate-900 h-screen text-red-500' >
      <Router> 
        <Navbar />
        <div className='max-w-screen-lg mx-auto my-7 px-2'>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/create' element={<Create/>} />
              <Route path='/recipe/:id' element={<Recipe/>} />
              <Route path='/search' element={<Search/>} />
            </Routes>
        </div>
      </Router>

    </div>
  )
}

export default App

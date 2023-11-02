import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import './index.css'
import logo from '../src/assets/logo.svg'
import Home from './pages/Home'
import Post from './pages/Post'

const App = () => {
  return (
    <div >
    <header className='w-full flex justify-between items-center  sm:px-8 px-4 py-4 '>
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>

      <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full  min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<Post />} />
      </Routes>
    </main>
    
     
    </div>
  )
}

export default App
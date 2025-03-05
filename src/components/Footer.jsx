import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className='bg-dark bg-blue-400 mt-4'>
      <footer className='container p-2'>
        <div className='c-div'>
          <h1 className='font-bold text-lg'><i className="fa-solid fa-truck-fast font-bold"></i>Daily cart</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis beatae dolore quaerat fugiat tenetur i</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
          <p>Currently v5-3-2.0</p>
        </div>
        <div className='c-div flex flex-col'>
          <h1 className='text-lg font-bold'>Links</h1>
          <Link to={'/'} >Landing page</Link>
          <Link to={'/home'}>Home page</Link>
          <Link to={'/history'}>History page</Link>
        </div>
        <div className='c-div flex flex-col'>
          <h1 className='text-lg font-bold'>Guides</h1>
          <Link>React</Link>
          <Link>React Router</Link>
          <Link>React Bootstrap</Link>
        </div>
        <div className='c-div'>
          <h1 className='text-lg font-bold'>Contact</h1>
          <div className='inp-div'>
            <input type="text" className='form-control border border-black-400'/>
            <button className='btn btn-primary'><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='i-div flex gap-5 mt-2'>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-github"></i>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

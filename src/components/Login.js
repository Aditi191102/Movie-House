import React from 'react'
import Header from './Header'
//import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(true);

  function formHandler(){
    isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true);
  }
  
  return (
    <div>
      <Header/>

      <div className='absolute'>
        <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg" 
        alt='bg-img' />
      </div>

      {
        isLoggedIn ? (<form className='absolute p-14 bg-black text-white w-3/12 mx-auto right-0 left-0 my-36 opacity-80 rounded-lg'>
          <h2 className='text-2xl font-bold rounded-md'>Sign In</h2>
          
          <input type='text' placeholder='Enter Your Email' 
          className='p-4 my-4 w-full bg-gray-900 hover:border border-white hover:bg-black 
          rounded-md apperance-none leading-tight focus:outline-none'/>
  
          <input type='password' placeholder='Enter Your Password' 
          className='p-4 my-4 bg-gray-900 w-full text-white hover:border border-white
           hover:bg-black rounded-md apperance-none leading-tight focus:outline-none'/>
          
          <button className='font-bold  text-xl bg-gradient-to-tl from-red-600 to-yellow-400 p-2 my-6 
          hover:from-yellow-400 hover:to-red-600 ... w-full rounded-md'>Submit</button>

          <div className='flex justify-between'>
          <div className='cursor-pointer'>
            <input type='checkbox' id='check-box'/>
            <label for="check-box" className='checked:border-blue-700'>Remember Me</label>
          </div>

            <p className='text-yellow-400 flex flex-col'>New User?
              <span className='text-orange-400 hover:underline text-xs cursor-pointer' onClick={formHandler}>Register Here</span>
            </p>          
          </div>
        </form>) 
        : 
        (<form className='absolute p-14 bg-black text-white w-3/12 mx-auto right-0 left-0 my-36 opacity-80 rounded-lg'>
        <h2 className='text-2xl font-bold rounded-md'>Sign Up</h2>
        
        <input type='text' placeholder='Enter Your First Name' className='p-4 my-4 w-full bg-gray-900 hover:border border-white hover:bg-black 
        rounded-md apperance-none leading-tight focus:outline-none'/>

        <input type='text' placeholder='Enter Your Last Name' className='p-4 my-4 w-full bg-gray-900 hover:border border-white hover:bg-black 
        rounded-md apperance-none leading-tight focus:outline-none'/>

        <input type='text' placeholder='Enter Your Email' 
        className='p-4 my-4 w-full bg-gray-900 hover:border border-white hover:bg-black 
        rounded-md apperance-none leading-tight focus:outline-none'/>

        <input type='password' placeholder='Enter Your Password' 
        className='p-4 my-4 bg-gray-900 w-full text-white hover:border border-white
         hover:bg-black rounded-md apperance-none leading-tight focus:outline-none'/>
        
        <button className='font-bold text-xl bg-gradient-to-tl from-red-600 to-yellow-400 p-2 my-6 
        hover:from-yellow-400 hover:to-red-600 ... w-full rounded-md'>Submit</button>
        
        <div className='flex justify-between'>
              <p className='text-yellow-400 flex flex-col'>Already a User?
                <span className='text-orange-400 hover:underline text-xs cursor-pointer' onClick={formHandler}>Sign In Here</span>
              </p>
            
          </div>
      </form>)
      }
    </div>
  )
}

export default Login

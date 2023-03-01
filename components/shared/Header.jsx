  import React from 'react'

  const Header = () => {
    return (
      <div className='p-5'>
          <div className='lg:grid grid-cols-3 gap-3 justify-center'>
          <div className='flex-1'>
            <h1 className='font-bold text-3md m-2 text-center'>+022 319 821 967</h1>
          </div>
          <div className='flex-1'>
            <h1 className='font-bold text-3xl m-2 text-center'>KnowFly Store</h1>
          </div>
          <div className='flex-1'>
            <h1 className='font-bold text-md m-2 text-center'>Icons</h1>
          </div>
          </div>
          <div className='lg:grid grid-cols-3 gap-3 justify-center'>
            <div  className='flex justify-center'>
              <ul className='flex inline-block list-none'>
              <li className='px-3'>Home</li>
              <li className='px-3'>About</li>
              <li className='px-3'>FAQ</li>
              <li className='px-3'>Blog</li>
              </ul>
            </div>
          <div></div>
          <div className='flex justify-center'>
              <ul className='flex inline-block list-none'>
              <li className='px-3'>Image</li>
              <li className='px-3'>Image</li>
              <li className='px-3'>Image</li>

              </ul>
          </div>
          </div>
          
        
      </div>
    )
  }

  export default Header

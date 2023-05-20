import React from 'react'

const Footer = () => {
  return (
    <footer className='absolute bottom-0 left-0 right-0 items-center flex justify-center bg-gradient-to-t from-black/90 to-transparent rounded-full '>
      <div className='items-center justify-center w-screen'>
        <p className='bg-gradient-to-r  w-screen from-red-900 to-black font-mono font-semibold text-xs md:text-lg md:font-bold border-2 rounded-full text-center text-white border-gray-300 p-2 md:p-3'>Developed by Rıdvan Gulce</p>
      </div>
    </footer>
  )
}

export default Footer
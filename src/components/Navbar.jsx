import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-white'>WsCube Tech.</h1>
      <ul className='hidden md:flex'>
        <li className='m-3 py-1 px-2 hover:cursor-pointer hover:underline'>Home</li>
        <li className='m-3 py-1 px-2 hover:cursor-pointer hover:underline'>Company</li>
        <li className='m-3 py-1 px-2 hover:cursor-pointer hover:underline'>Resources</li>
        <li className='m-3 py-1 px-2 hover:cursor-pointer hover:underline'>About</li>
        <li className='m-3 py-1 px-2 hover:cursor-pointer hover:underline'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden lg:hidden z-20'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className= {nav ? 'z-10 fixed left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-200' : 'z-10 ease-in-out w-[100%] duration-200 h-screen fixed left-[-1400px]  top-0 '}>
        <h1 className='w-full text-3xl font-bold text-[white] m-4 my-10'>WsCube</h1>
          <li className='py-3 px-3 my-2 border-b border-gray-600 hover:cursor-pointer hover:underline  '>Home</li>
          <li className='py-3 px-3 my-2 border-b border-gray-600 hover:cursor-pointer hover:underline '>Company</li>
          <li className='py-3 px-3 my-2 border-b border-gray-600 hover:cursor-pointer hover:underline '>Resources</li>
          <li className='py-3 px-3 my-2 border-b border-gray-600 hover:cursor-pointer hover:underline  '>About</li>
          <li className='py-3 px-3 my-2 hover:cursor-pointer hover:underline '>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;

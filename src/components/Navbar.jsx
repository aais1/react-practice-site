// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-white underline underline-offset-8'>Ali Aais😁</h1>
      <ul className='hidden md:flex'>
        <NavLink to="/"><li className='m-3 py-1 px-2 hover:cursor-pointer hover:underline'>Home</li></NavLink>
        <NavLink to="/company"><li className='m-3 py-1 px-2 hover:cursor-pointer hover:underline'>Company</li></NavLink>
        <NavLink to="/resources"><li className='m-3 py-1 px-2 hover:cursor-pointer hover:underline'>Resources</li></NavLink>
        <NavLink to="/about"><li className='m-3 py-1 px-2 hover:cursor-pointer hover:underline'>About</li></NavLink>
        <NavLink to="/contact"><li className='m-3 py-1 px-2 hover:cursor-pointer hover:underline'>Contact</li></NavLink>
      </ul>
      <div onClick={handleNav} className='text-green-900 block border-2 border-black rounded-lg p-2 fixed right-10 top-7 md:hidden lg:hidden z-20 hover:cursor-pointer hover:scale-105 duration-200 active:border-white active:text-white'>
          {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
      </div>
      <ul className= {nav ? 'z-10 fixed left-0 top-0 w-[100%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-200' : 'z-10 ease-in-out w-[100%] duration-200 h-screen fixed left-[-1400px]  top-0 '}>
      <h1 className='  w-full text-3xl m-4 my-10 font-bold text-white underline underline-offset-8'>Ali Aais😁</h1>
       
      <NavLink to="/"><li className='m-3 py-1 px-2 hover:cursor-pointer hover:underline'>Home</li></NavLink>
        <NavLink to="/company"><li className='m-3 py-1 px-2 hover:cursor-pointer hover:underline'>Company</li></NavLink>
        <NavLink to="/resources"><li className='m-3 py-1 px-2 hover:cursor-pointer hover:underline'>Resources</li></NavLink>
        <NavLink to="/about"><li className='m-3 py-1 px-2 hover:cursor-pointer hover:underline'>About</li></NavLink>
        <NavLink to="/contact"><li className='m-3 py-1 px-2 hover:cursor-pointer hover:underline'>Contact</li></NavLink>
      </ul>
    </div>
  );
};

export default Navbar;

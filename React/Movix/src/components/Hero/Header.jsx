import React from 'react';

const Header = () => {
  return (
    <>
      <nav className='flex justify-between items-center p-4 bg-gray-800 text-white shadow-md'>
        <div className='text-lg font-bold'>Movix</div>
        <div className='space-x-4'>
          <a href="#" className='hover:text-gray-400 transition duration-200'>Movies</a>
          <a href="#" className='hover:text-gray-400 transition duration-200'>TV Shows</a>
        </div>
      </nav>
    </>
  );
};

export default Header;


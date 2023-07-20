import React from 'react';

function Loader() {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='flex items-center space-x-2'>
        <div className='w-3 h-3 rounded-full bg-gradient-to-r from-black via-[#4EB8FF] to-[#4EB8FF] one'></div>
        <div className='w-3 h-3 rounded-full bg-gradient-to-r from-black via-[#4EB8FF] to-[#4EB8FF] two'></div>
        <div className='w-3 h-3 rounded-full bg-gradient-to-r from-black via-[#4EB8FF] to-[#4EB8FF] three'></div>
        <div className='w-3 h-3 rounded-full bg-gradient-to-r from-black via-[#4EB8FF] to-[#4EB8FF] four'></div>
        <div className='w-3 h-3 rounded-full bg-gradient-to-r from-black via-[#4EB8FF] to-[#4EB8FF] five'></div>
      </div>
      <div className='flex items-center space-x-2 absolute second'>
        <div className='w-3 h-3 rounded-full bg-gradient-to-r from-black via-[#4EB8FF] to-[#4EB8FF] one-a'></div>
        <div className='w-3 h-3 rounded-full bg-gradient-to-r from-black via-[#4EB8FF] to-[#4EB8FF] two-a'></div>
        <div className='w-3 h-3 rounded-full bg-gradient-to-r from-black via-[#4EB8FF] to-[#4EB8FF] three-a'></div>
        <div className='w-3 h-3 rounded-full bg-gradient-to-r from-black via-[#4EB8FF] to-[#4EB8FF] four-a'></div>
        <div className='w-3 h-3 rounded-full bg-gradient-to-r from-black via-[#4EB8FF] to-[#4EB8FF] five-a'></div>
      </div>
    </div>
  );
}

export default Loader;

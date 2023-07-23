import React from 'react';

function ChatBox() {
  return (
    <div className='absolute top-0 right-0 bottom-0 left-0 p-14 flex justify-end items-end'>
      <div className='absolute top-0 right-0 bottom-0 left-0 bg-black opacity-80'></div>
      <div className='h-96 w-64 bg-white shadow z-40'></div>
    </div>
  );
}

export default ChatBox;

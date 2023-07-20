import React, { useState } from 'react';
import { BsChatFill } from 'react-icons/bs';

function Chat() {
  const [chat, setChat] = useState('');

  const scrollToTop = () => {};

  return (
    <button
      className={`fixed bottom-4 right-4 p-3 bg-blue-600 text-xl text-white rounded-full shadow-3 hover:bg-priLight hover:text-pri`}
      onClick={scrollToTop}
    >
      <BsChatFill />
      <div className='h-3 w-3 bg-green-500 border border-white absolute -left-[1px] rounded-full'></div>
    </button>
  );
}

export default Chat;

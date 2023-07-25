import React, { useState } from 'react';
import { BsChatFill } from 'react-icons/bs';
import Link from 'next/link';
import { auth } from '../../firebase';
function Chat() {
  const user = auth?.currentUser?.uid;

  return (
    <Link href={'/userchar'}>
      <button
        className={`fixed bottom-4 right-4 p-3 bg-blue-600 text-xl text-white rounded-full shadow-3 hover:bg-priLight hover:text-pri`}
      >
        <BsChatFill />
        <div className='h-3 w-3 bg-green-500 border border-white absolute -left-[1px] rounded-full'></div>
      </button>
    </Link>
  );
}

export default Chat;

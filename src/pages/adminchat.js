import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { doc, onSnapshot, updateDoc, arrayUnion } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { AiOutlineSend } from 'react-icons/ai';
import { useRouter } from 'next/router';

function Adminchat() {
  const [chatArr, setChatArr] = useState([]);
  const [chatInfo, setChatInfo] = useState({
    name: '',
    location: '',
  });
  const router = useRouter();
  const [adminChat, setAdminChat] = useState([]);
  useEffect(() => {
    const userChatRef = doc(db, 'user', 'rp1urhbA5qYR9l7KVeXz');

    const unsub = onSnapshot(userChatRef, (doc) => {
      console.log('Current data: ', doc.data());
      setChatInfo({
        name: doc.data().name,
        location: doc.data().location,
      });
    });

    return () => {
      unsub();
    };
  }, []);

  const handleChat = async () => {
    const adminChatRef = doc(db, 'admin', '7yWl2bmcmM42uRPuwS6n');
    await updateDoc(adminChatRef, {
      chat: adminChat,
    });

    setChatArr((prev) => [
      ...prev,
      {
        type: 'admin',
        chat: adminChat,
      },
    ]);

    setAdminChat('');
  };

  useEffect(() => {
    const userChatRef = doc(db, 'user', 'rp1urhbA5qYR9l7KVeXz');

    const unsub = onSnapshot(userChatRef, (doc) => {
      setChatArr((prev) => [
        ...prev,
        {
          type: 'user',
          chat: doc.data().chat,
        },
      ]);
    });

    return () => {
      unsub();
    };
  }, []);

  const handleExit = async () => {
    const adminChatRef = doc(db, 'admin', '7yWl2bmcmM42uRPuwS6n');
    await updateDoc(adminChatRef, {
      chat: '',
    });

    router.push('/coin');
  };

  return (
    <div className='bg-white h-screen'>
      <div className='flex items-center justify-between bg-blue-500 px-2 py-3 shadow-md'>
        <div className='flex items-center space-x-2'>
          <div className='text-gray-500 p-2 bg-gray-400 rounded-full'>
            <BsFillPersonFill className='text-3xl' />
          </div>
          <div>
            <h1>How can we help you?</h1>
            <div className='flex items-center space-x-2'>
              <div className='w-2 h-2 bg-green-500 rounded-full'></div>
              <h1 className='text-[10px]'>We reply immediately</h1>
            </div>
          </div>
        </div>
        <div className='flex items-center space-x-2'>
          <h1>{chatInfo.name}</h1>
          <h1 className='p-2 bg-gray-600 rounded' onClick={handleExit}>
            x
          </h1>
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-between px-2 space-y-2 py-5'>
        {chatArr.map((e, idx) => (
          <div key={idx} className='w-full flex flex-col items-start'>
            <h1
              className={`block text-gray-500 w-auto rounded-md ${
                e.type === 'user'
                  ? 'text-end ms-auto text-white bg-blue-600 px-2 py-1 rounded'
                  : 'text-start me-auto bg-blue-200 px-2 py-1 rounded'
              }`}
            >
              {e.chat}
            </h1>
          </div>
        ))}
      </div>
      {chatInfo.name !== '' && (
        <div className='flex py-2 items-center border justify-between absolute bottom-1 w-full px-3'>
          <input
            type='text'
            value={adminChat}
            className='outline-none text-gray-600 placeholder:text-gray-500 w-full placeholder:text-[10px]'
            placeholder='Chat'
            onChange={(e) => setAdminChat(e.target.value)}
          />
          <AiOutlineSend onClick={handleChat} className='text-gray-400' />
        </div>
      )}
    </div>
  );
}

export default Adminchat;

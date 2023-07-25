import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { AiOutlineSend } from 'react-icons/ai';
import { useRouter } from 'next/router';
import EmojiPicker from '@/components/EmojiPicker';

function Userchar() {
  const [sname, setSName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userChat, setUserChat] = useState('');
  const [chatArr, setChatArr] = useState([]);
  const [showEmoji, setShowEmoji] = useState(false);
  const chatContainerRef = useRef(null);
  const [chatInfo, setChatInfo] = useState({
    name: '',
    location: '',
  });
  const router = useRouter();

  const handleChange = ({ target }) => {
    setChatInfo({ ...chatInfo, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const userChatRef = doc(db, 'user', 'rp1urhbA5qYR9l7KVeXz');

      // Update the document with the provided chatInfo data
      await updateDoc(userChatRef, {
        name: chatInfo.name,
        location: chatInfo.location,
      });

      // Set up a snapshot listener to get real-time updates
      const unsub = onSnapshot(userChatRef, (doc) => {
        console.log('Current data: ', doc.data());
        setSName(doc.data().name);
      });

      return () => unsub();
    } catch (error) {
      console.error('Error occurred:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChat = async () => {
    const userChatRef = doc(db, 'user', 'rp1urhbA5qYR9l7KVeXz');
    await updateDoc(userChatRef, {
      chat: userChat,
    });

    setChatArr((prev) => [
      ...prev,
      {
        type: 'user',
        chat: userChat,
      },
    ]);
    setUserChat('');
  };

  useEffect(() => {
    const userChatRef = doc(db, 'admin', '7yWl2bmcmM42uRPuwS6n');

    const unsub = onSnapshot(userChatRef, (doc) => {
      setChatArr((prev) => [
        ...prev,
        {
          type: 'admin',
          chat: doc.data().chat,
        },
      ]);
    });

    return () => {
      unsub();
    };
  }, []);

  const handleExit = async () => {
    const userChatRef = doc(db, 'user', 'rp1urhbA5qYR9l7KVeXz');

    // Update the document with the provided chatInfo data
    await updateDoc(userChatRef, {
      name: '',
      location: '',
      chat: '',
    });

    setSName('');

    router.push('/coin');
  };

  useEffect(() => {
    const userChatRef = doc(db, 'user', 'rp1urhbA5qYR9l7KVeXz');
    const timer = setTimeout(() => {
      updateDoc(userChatRef, {
        name: '',
        location: '',
        chat: '',
      });
      setSName('');
    }, 15 * 60 * 1000);

    return () => clearTimeout(timer);
  }, [userChat]);

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [chatArr]);

  const onEmojiClick = (event) => {
    setAdminChat((prev) => prev + ' ' + event.emoji);
    setShowEmoji(false);
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
          <h1>{sname}</h1>

          <h1 className='p-2 bg-gray-600 rounded' onClick={handleExit}>
            x
          </h1>
        </div>
      </div>
      <div
        className='flex flex-wrap items-center justify-between px-2 space-y-2 py-20 max-h-screen bg-white overflow-scroll'
        ref={chatContainerRef}
      >
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
      {sname === '' && (
        <div className='h-full w-full px-3 text-black flex flex-col items-center justify-center'>
          <h1 className='text-center text-gray-500 mb-4'>
            Please fill in your information
          </h1>
          <form
            method='POST'
            className='space-y-3 flex flex-col items-center justify-center w-full'
            onSubmit={handleSubmit}
          >
            <input
              type='text'
              name='name'
              placeholder='Your name'
              vlaue={chatInfo.name}
              className='w-full p-2 border-b outline-none'
              onChange={handleChange}
            />
            <input
              type='text'
              name='location'
              placeholder='Your location'
              vlaue={chatInfo.location}
              className='w-full p-2 border-b outline-none'
              onChange={handleChange}
            />
            <button
              type='submit'
              className='px-5 py-1 rounded bg-blue-500 text-white mt-6'
            >
              {isLoading ? 'Starting' : 'Start Chat'}
            </button>
          </form>
        </div>
      )}
      {sname !== '' && (
        <div className='flex py-2 items-center border justify-between absolute bottom-1 w-full px-3'>
          <input
            type='text'
            value={userChat}
            className='outline-none text-gray-600 placeholder:text-gray-500 w-full placeholder:text-[10px]'
            placeholder='Chat'
            onChange={(e) => setUserChat(e.target.value)}
          />
          <button onClick={() => setShowEmoji(!showEmoji)}>😀</button>
          <AiOutlineSend onClick={handleChat} className='text-gray-400 ml-2' />
        </div>
      )}
      <EmojiPicker onEmojiClick={onEmojiClick} showEmoji={showEmoji} />
    </div>
  );
}

export default Userchar;

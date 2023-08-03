import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import {
  BsChatQuoteFill,
  BsEmojiSmile,
  BsFillPersonFill,
} from 'react-icons/bs';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import { AiOutlineSend } from 'react-icons/ai';
import { useRouter } from 'next/router';
import EmojiPicker from '@/components/EmojiPicker';
import emailjs from '@emailjs/browser';

function Userchar() {
  const [sname, setSName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userChat, setUserChat] = useState('');
  const [chatArr, setChatArr] = useState([]);
  const [showEmoji, setShowEmoji] = useState(false);
  const chatContainerRef = useRef(null);
  const [lastUpdateTimestamp, setLastUpdateTimestamp] = useState(Date.now());
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
      const userChatRef = doc(db, 'validateuser', 'kO4jPXVmEskxx4dPNemz');

      // Update the document with the provided chatInfo data
      await updateDoc(userChatRef, {
        name: chatInfo.name,
        location: chatInfo.location,
      });

      // Set up a snapshot listener to get real-time updates
      const unsub = onSnapshot(userChatRef, async (doc) => {
        setSName(doc.data().name);
        const details = {
          name: doc.data().name,
        };

        try {
          const response = await emailjs.send(
            'service_1bipru1',
            'template_dfjv3pi',
            details,
            'Zv3dA0R0JSL2s0LwA'
          );
          console.log('SUCCESS!', response.status, response.text);
        } catch (error) {
          console.log('FAILED...', error);
        }
      });

      return () => unsub();
    } catch (error) {
      console.error('Error occurred:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChat = async () => {
    const userChatRef = doc(db, 'validateuser', 'kO4jPXVmEskxx4dPNemz');
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
    setLastUpdateTimestamp(Date.now());
  };

  useEffect(() => {
    const userChatRef = doc(db, 'validate', 'swDvjvgz9su0LDGwTNki');

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
    const userChatRef = doc(db, 'validateuser', 'kO4jPXVmEskxx4dPNemz');

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
    const userChatRef = doc(db, 'validateuser', 'kO4jPXVmEskxx4dPNemz');
    if (Date.now() - lastUpdateTimestamp >= 15 * 60 * 1000) {
      updateDoc(userChatRef, {
        name: '',
        location: '',
        chat: '',
      });
      setSName('');
    }
  }, [userChat]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatArr]);

  const onEmojiClick = (event) => {
    setUserChat((prev) => prev + ' ' + event.emoji);
    setShowEmoji(false);
  };

  return (
    <div className='bg-white h-screen'>
      <div className='fixed w-full top-0 text-white flex items-center justify-between bg-blue-500 px-2 py-3 shadow-md'>
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

          <h1
            className='p-2 bg-gray-600 rounded cursor-pointer'
            onClick={handleExit}
          >
            x
          </h1>
        </div>
      </div>
      {sname !== '' && (
        <div
          className='flex flex-wrap items-center justify-between px-2 space-y-2 py-20 max-h-screen overflow-y-auto'
          ref={chatContainerRef}
        >
          {chatArr.map((e, idx) => (
            <div key={idx} className='w-full flex flex-col items-start'>
              <span
                className={`${
                  e.chat !== '' ? 'px-2 py-1' : ''
                } block text-gray-500 w-auto rounded-xl ${
                  e.type === 'user'
                    ? 'text-end ms-auto text-white'
                    : 'text-start me-auto'
                } flex items-end`}
              >
                {e.type === 'admin' && (
                  <BsChatQuoteFill
                    className={`${
                      e.chat !== '' ? 'flex' : 'hidden'
                    } bg-gray-200 p-[3px] text-white text-[14px] rounded-full`}
                  />
                )}
                <h1
                  className={`${
                    e.chat !== '' ? 'px-2 py-1' : ''
                  } block text-gray-500 w-auto rounded-xl ${
                    e.type === 'user'
                      ? 'text-end ms-auto text-white bg-blue-600'
                      : 'text-start me-auto bg-gray-100'
                  }`}
                >
                  {e.chat}
                </h1>
              </span>
            </div>
          ))}
        </div>
      )}
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
        <div className='flex py-2 items-center border justify-between absolute bottom-0 w-full px-3'>
          <input
            type='text'
            value={userChat}
            className='outline-none text-gray-600 placeholder:text-gray-500 w-full placeholder:text-[10px]'
            placeholder='Chat'
            onChange={(e) => setUserChat(e.target.value)}
          />
          <button onClick={() => setShowEmoji(!showEmoji)}>
            <BsEmojiSmile className='text-gray-500' />
          </button>
          <AiOutlineSend onClick={handleChat} className='text-gray-400 ml-2' />
        </div>
      )}
      <EmojiPicker onEmojiClick={onEmojiClick} showEmoji={showEmoji} />
    </div>
  );
}

export default Userchar;

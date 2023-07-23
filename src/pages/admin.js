import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';

function Admin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [userDetails, setUserDetails] = useState(null);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      console.log('Login data:', loginData);
      const { email, password } = loginData;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setUserDetails(user);
      router.push('/');
      setIsLoading(false);
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white p-8 rounded shadow-lg w-96'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Email:
            </label>
            <input
              type='text'
              name='email'
              value={loginData.email}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-md text-black placeholder:text-[10px] focus:outline-none focus:ring focus:border-blue-300'
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Password:
            </label>
            <input
              type='password'
              name='password'
              value={loginData.password}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-md text-black placeholder:text-[10px] focus:outline-none focus:ring focus:border-blue-300'
              placeholder='Enter your password'
              required
            />
          </div>
          <div className='text-center'>
            <button
              type='submit'
              className='w-full bg-[#001132] text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300'
            >
              {isLoading ? 'Loading...' : 'Login'}
            </button>
          </div>
          {error && (
            <div className='text-red-600 text-center mt-2'>{error}</div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Admin;

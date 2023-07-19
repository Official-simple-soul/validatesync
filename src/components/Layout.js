import React from 'react';
import Head from 'next/head';
import Header from './Header';
import ScrollToTopButton from './ScrollToTopButton';

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>ContractFixs</title>
        <meta name='description' content='Todo App' />
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
      </Head>
      <Header />
      <main className='bg-[#001132]'>{children}</main>
      <ScrollToTopButton />
    </>
  );
}

export default Layout;

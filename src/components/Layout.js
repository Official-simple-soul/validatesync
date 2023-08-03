import React from 'react';
import Head from 'next/head';

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>ValidateSync</title>
        <meta
          name='description'
          content='Blockchain Rectification - We are here to help you resolve your crypto related issues'
        />
        <meta property='og:title' content='Validate Sync' />
        <meta
          property='og:image'
          content='https://img.favpng.com/12/9/21/blockchain-vector-graphics-computer-icons-illustration-bitcoin-png-favpng-7TJzKAfyQeJFBwa2EduZhFjD1.jpg'
        />
        <meta property='og:url' content='https://validatesync.vercel.app/' />
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
      </Head>
      <main className='bg-[#001132]'>{children}</main>
    </>
  );
}

export default Layout;

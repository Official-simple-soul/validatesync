import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <div className='flex justify-between items-center py-3 px-4 bg-white shadow-lg text-[#001132]'>
      <Link href={'/'}>
        <h1 className='font-bold'>ContractFixs</h1>
      </Link>
    </div>
  );
}

export default Header;

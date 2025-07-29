import React, { useState } from 'react'
import Sidebar from './Sidebar';
import Header from './Header';
import TransactionsTable from './walletComponents/TransactionsTable';
import MyBalance from './walletComponents/MyBalance';
import BitcoinSent from './walletComponents/BitcoinSent';
import BitcoinReceive from './walletComponents/BitcoinReceive';

const MyWallet = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>

      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden w-[100%] bg-cyan-50 '>
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className=" flex justify-center gap-7 mb-5 mt-5 md:flex-wrap sm:flex-wrap max-sm:flex-wrap">
          <MyBalance />
          <BitcoinSent />
          <BitcoinReceive />
        </div>

        <div className="ml-8 mr-6">
          <div className="">
            <TransactionsTable />
          </div>
        </div>

      </div>
    </div>
  )
}

export default MyWallet

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../component/Dashboard'
import BitcoinPrices from '../component/BitcoinPrices'
import MyWallet from '../component/MyWallet'
import MySetting from '../component/MySetting'
import Members from '../component/Members'

const Path = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/members' element={<Members />} />
        <Route path='/prices' element={<BitcoinPrices />} />
        <Route path='/wallet' element={<MyWallet />} />
        <Route path='/setting' element={<MySetting />} />
      </Routes>
    </div>
  )
}

export default Path

import React, { useState } from 'react'
import Sidebar from './Sidebar';
import Header from './Header';
import NotiComponent from './settingComponents/NotiComponent';
import DashboardLanguage from './settingComponents/DashboardLanguage';
import ChangePassword from './settingComponents/ChangePassword';
import SuspendMember from './settingComponents/SuspendMember';

const MySetting = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>

      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden w-[100%] bg-cyan-50 '>
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <h1 className='ml-10 mt-5 mb-5 text-4xl font-bold'>Settings</h1>

        <div className="mx-10">
          <div className="">
            <NotiComponent />
            <DashboardLanguage />
            <ChangePassword />
            <SuspendMember />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default MySetting

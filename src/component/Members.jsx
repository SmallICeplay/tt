import React, { useState } from 'react'
import Sidebar from './Sidebar';
import Header from './Header';
import MemberDataTable from './memberComponents/MemberDataTable';
import TopMembers from './memberComponents/TopMembers';
import NewMembers from './memberComponents/NewMembers';
import MemberLineChart from './memberComponents/MemberLineChart';

const Members = () => {
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
                    <TopMembers />
                    <NewMembers />
                    <MemberLineChart />
                </div>

                <div className="ml-8 mr-6">
                    <div className="">
                        <MemberDataTable />
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Members

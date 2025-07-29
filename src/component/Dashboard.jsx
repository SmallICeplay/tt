import { useState } from 'react'
import Header from './Header'
import CryptoStatsHeader from './dashboardComponents/CryptoStatsHeader'
import CryptoTrending from './dashboardComponents/CryptoTrending'
import CryptoSocialsCarousel from './dashboardComponents/CryptoSocialsCarousel'
import CryptoPriceLineChart from './dashboardComponents/CryptoPriceLineChart'
import Footer from './Footer'

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [fullscreen, setFullscreen] = useState(true);

    return (
    
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
          
            <div className="">
                {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
            </div>

            <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden w-[100%] bg-[#f8f9fa] '>
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                {/* 新增的统计看板头部 */}
                <CryptoStatsHeader />

                <div className="flex flex-wrap justify-center  mb-3">
                    
                    <CryptoTrending />
                    <div className="flex flex-wrap w-full">
                      <div className="block w-full md:hidden mb-4">
                        <CryptoSocialsCarousel />
                      </div>
                      <div className={(fullscreen ? "flex-1" : "flex-[3]") + " px-2 min-w-[320px] w-full md:w-0"}>
                        <div className="w-full">
                          <CryptoPriceLineChart onToggleFullscreen={() => setFullscreen(f => !f)} isFullScreen={fullscreen} />
                        </div>
                      </div>
                      {!fullscreen && (
                        <div className="hidden md:block flex-[1] px-0 min-w-[320px] w-full md:w-0 mt-4 md:mt-0">
                          <CryptoSocialsCarousel />
                        </div>
                      )}
                    </div>
                </div>

            
                {/* Footer */}
                <Footer />
            </div>
        </div>

    )
}

export default Dashboard

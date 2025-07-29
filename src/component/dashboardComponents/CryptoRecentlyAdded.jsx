import { AiFillFire } from 'react-icons/ai'
import { FaChartLine } from 'react-icons/fa'
import { FaBitcoin } from 'react-icons/fa'
import { FaRegMoon } from 'react-icons/fa'

const CryptoRecentlyAdded = () => {
    return (
        <div className="flex flex-row w-full justify-between gap-4 mt-1">
            {/* 社区总成交卡片 */}
            <div className="flex flex-col rounded-xl bg-blue-600 text-white p-3 flex-1 shadow-md relative overflow-hidden">
                <div className="flex items-center justify-between mb-0.5">
                    <div className="flex items-center gap-1.5">
                        <AiFillFire className="text-lg" />
                        <span className="text-sm font-medium">今日XBOT社区成交额</span>
                    </div>
                    <span className="text-xs text-blue-200">Last 24h</span>
                </div>
                <div className="mt-2 mb-1">
                    <span className="align-super text-base font-light mr-1">$</span>
                    <span className="text-xl md:text-2xl font-bold tracking-tight">5286343,837.15</span>
                    <span className="text-green-200 text-xs align-super ml-2">↗ +0.64%</span>
                </div>
                <div className="flex items-center mt-3">
                    <FaBitcoin className="text-yellow-400 text-lg mr-2" />
                    <span className="text-blue-100 text-xs">Bitcoin (BTC)</span>
                </div>
            </div>
            {/* 覆盖人数卡片 */}
            <div className="flex flex-col rounded-xl bg-white text-black p-3 flex-1 shadow-md relative overflow-hidden">
                <div className="flex items-center justify-between mb-0.5">
                    <div className="flex items-center gap-1.5">
                        <FaChartLine className="text-lg text-blue-600" />
                        <span className="text-sm font-medium">总覆盖人次数</span>
                    </div>
                    <span className="text-xs text-gray-400">ALL TIME</span>
                </div>
                <div className="mt-2 mb-1">
                    <span className="align-super text-base font-light mr-1">$</span>
                    <span className="text-xl md:text-2xl font-bold tracking-tight">135805</span>
                    <span className="text-green-500 text-xs align-super ml-2">↗ +141</span>
                </div>
                {/* 曲线SVG背景 */}
                <svg className="absolute right-0 bottom-0 w-4/5 h-1/2 opacity-60 pointer-events-none" viewBox="0 0 200 80" fill="none"><path d="M0 60 Q 50 10 100 40 T 200 70" stroke="#2563eb" strokeWidth="2" fill="none"/><path d="M0 70 Q 50 40 100 60 T 200 40" stroke="#60a5fa" strokeWidth="2" fill="none"/><path d="M0 50 Q 50 80 100 30 T 200 60" stroke="#93c5fd" strokeWidth="2" fill="none"/></svg>
                <div className="flex items-center mt-3">
                    <FaRegMoon className="text-yellow-400 text-lg mr-2" />
                    <span className="text-gray-500 text-xs">Moonriver (MOVR)</span>
                </div>
            </div>
        </div>
    )
}

export default CryptoRecentlyAdded

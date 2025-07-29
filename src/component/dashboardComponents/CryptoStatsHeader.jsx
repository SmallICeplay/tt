import { useState } from 'react'

const CryptoStatsHeader = () => {
  // const [activeTab, setActiveTab] = useState('群星计划')
  //
  // const tabs = [
  //   { name: '群星计划', value: '群星计划' },
  //   { name: '社区聚会', value: '社区聚会' },
  //   { name: 'Twitter', value: 'Twitter' }
  // ]
  //
  //
  //
  // const communityMembers = [
  //   { name: '七七卖资料的', platform: 'SIXTHNET', verified: true },
  //   { name: '七七卖资料的', platform: 'SIXTHNET', verified: true },
  //   { name: '七七卖资料的', platform: 'SIXTHNET', verified: true },
  //   { name: '七七卖资料的', platform: 'SIXTHNET', verified: true }
  // ]
  //
  // const transactions = [
  //   { type: 'BTCUSDT', amount: '+$1,212.32', time: '10:54 AM', status: 'Failed' },
  //   { type: 'BTCUSDT', amount: '+$1,212.32', time: '02:32 PM', status: 'Pending' },
  //   { type: 'BTCUSDT', amount: '+$1,212.32', time: '10:54 AM', status: 'Failed' },
  //   { type: 'DEPOSIT', amount: '+500,000', time: '08:14 AM', status: 'Completed' },
  //   { type: 'ETHUSDT', amount: '+$20,296', time: '01:47 AM', status: 'Completed' }
  // ]
  //
  // const cryptoData = [
  //   { name: 'BTC', price: '$43,578.64', change: '-1.3%', negative: true },
  //   { name: 'ETH', price: '$2,288.38', change: '+1.2%', negative: false },
  //   { name: 'BNB', price: '$248.77', change: '-2.9%', negative: true },
  //   { name: 'SOL', price: '$94.68', change: '-6.6%', negative: true },
  //   { name: 'XRP', price: '$0.6138424', change: '+2.3%', negative: false },
  //   { name: 'ADA', price: '$0.4042636', change: '-6.0%', negative: true }
  // ]

  return (
      <div className="p-4 bg-gray-100 min-h-screen space-y-4">
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded shadow text-center">Kickstarter 项目1</div>
          <div className="bg-white p-4 rounded shadow text-center">Kickstarter 项目2</div>
          <div className="bg-white p-4 rounded shadow text-center">Kickstarter 项目3</div>
          <div className="bg-white p-4 rounded shadow text-center">Kickstarter 项目4</div>
        </div>

        <div className="text-xl font-bold text-gray-800">100万“明星计划”数据看板</div>

        <div className="grid grid-cols-12 grid-rows-[auto_auto_auto_auto_auto] gap-4">
          <div className="col-span-3 row-span-2 bg-white rounded shadow p-4 flex flex-col items-center justify-center">
            <div className="text-sm text-gray-600 mb-2">XBot 推荐卡</div>
            <img className="w-full h-48 object-cover rounded mb-2" src="https://via.placeholder.com/300x150"/>
            <div className="text-xl font-bold">5900351972020</div>
          </div>

          <div className="col-span-3 row-span-1 bg-white rounded shadow p-4 text-center">
            <div className="text-sm text-gray-500">社区活跃度 BTC</div>
            <div className="text-2xl font-bold">3132 个</div>
            <div className="text-xs text-gray-400">¥43419.20</div>
          </div>

          <div className="col-span-3 row-span-1 bg-white rounded shadow p-4 text-center">
            <div className="text-sm text-gray-500">社区活跃度 ETH</div>
            <div className="text-2xl font-bold">1202560</div>
            <div className="text-xs text-gray-400">¥2279.63</div>
          </div>

          <div className="col-span-3 row-span-1 bg-white rounded shadow p-4 text-center">
            <div className="text-sm text-gray-500">已兑换数量 XING</div>
            <div className="text-2xl font-bold">43.00</div>
            <div className="text-xs text-gray-400">¥2270.12</div>
          </div>

          <div className="col-span-6 row-span-2 bg-white rounded shadow p-4">
            <div className="font-semibold mb-2">100万明星计划余额走势</div>
            <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
              折线图占位（可接 ECharts）
            </div>
          </div>

          <div className="col-span-3 row-span-1 bg-white rounded shadow p-4">
            <div className="font-semibold mb-2">主流币种</div>
            <ul className="text-sm space-y-1">
              <li>BTC ¥43419.20 <span className="text-red-500 text-xs">-3.5%</span></li>
              <li>ETH ¥2279.63 <span className="text-green-500 text-xs">+2.8%</span></li>
              <li>USDT ¥7.15</li>
              <li>XRP ¥4.00</li>
              <li>ADA ¥3.40</li>
            </ul>
          </div>

          <div className="col-span-3 row-span-1 bg-white rounded shadow p-4">
            <div className="font-semibold mb-2">今日热门用户</div>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>👤 七星战神</li>
              <li>👤 七星战神</li>
              <li>👤 七星战神</li>
              <li>👤 七星战神</li>
            </ul>
          </div>

          <div className="col-span-6 row-span-1 bg-white rounded shadow p-4">
            <div className="font-semibold mb-2">今日社区成交</div>
            <table className="w-full text-sm">
              <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="py-1">交易对</th>
                <th className="py-1">数量</th>
                <th className="py-1">时间</th>
                <th className="py-1">状态</th>
              </tr>
              </thead>
              <tbody className="text-gray-700">
              <tr>
                <td>BTC/USDT</td>
                <td>$1,232</td>
                <td>10:54 AM</td>
                <td className="text-red-500">失败</td>
              </tr>
              <tr>
                <td>ETH/USDT</td>
                <td>$2,200</td>
                <td>09:41 AM</td>
                <td className="text-green-500">成功</td>
              </tr>
              <tr>
                <td>DEPOSIT</td>
                <td>+200.00</td>
                <td>09:00 AM</td>
                <td className="text-green-500">成功</td>
              </tr>
              </tbody>
            </table>
          </div>

          <div
              className="col-span-3 row-span-1 bg-blue-100 rounded shadow p-4 text-center flex flex-col justify-between">
            <div>
              <div className="font-semibold text-blue-700 mb-1">TRY OUR PREMIUM FEATURES</div>
              <p className="text-sm text-blue-600 mb-2">Let AI help you understand crypto!</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">Explore Features
            </button>
          </div>
        </div>
      </div>
  )
}

export default CryptoStatsHeader

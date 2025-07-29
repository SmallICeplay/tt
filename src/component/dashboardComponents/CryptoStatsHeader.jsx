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
      <div className="p-4 bg-gray-50 min-h-screen space-y-6 font-sans">
        {/* Kickstarter 项目区 */}
        <div className="grid grid-cols-4 gap-4">
          {['Kickstarter 项目1', 'Kickstarter 项目2', 'Kickstarter 项目3', 'Kickstarter 项目4'].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
                {item}
              </div>
          ))}
        </div>

        {/* 标题 */}
        <div className="grid grid-cols-12">
          <div className="col-span-12 bg-white rounded-2xl shadow p-4 flex items-center min-h-[64px]">
            <div className="text-2xl font-bold text-gray-800">100万“明星计划”数据看板</div>
          </div>
        </div>

        {/* 主内容区（关键布局） */}
        <div className="grid grid-cols-12 grid-rows-3 gap-4">
          {/* 推荐卡：左侧固定高度 */}
          <div className="col-span-3 row-span-2 bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center justify-center">
            <div className="text-sm text-gray-600 mb-2">XBot 推荐卡</div>
            <img
                className="w-full h-48 object-cover rounded-xl mb-3"
                src="https://via.placeholder.com/300x150"
                alt="XBot 推荐"
            />
            <div className="text-xl font-semibold tracking-wide">5900351972020</div>
          </div>

          {/* 数值卡 */}
          {[
            { title: '社区活跃度 BTC', value: '3132 个', price: '¥43419.20' },
            { title: '社区活跃度 ETH', value: '1202560', price: '¥2279.63' },
            { title: '已兑换数量 XING', value: '43.00', price: '¥2270.12' }
          ].map((item, i) => (
              <div key={i} className="col-span-3 bg-white rounded-2xl shadow-lg p-4 text-center">
                <div className="text-sm text-gray-500">{item.title}</div>
                <div className="text-2xl font-bold text-blue-600 mt-1">{item.value}</div>
                <div className="text-xs text-gray-400 mt-1">{item.price}</div>
              </div>
          ))}

          {/* 折线图 */}
          <div className="col-span-5 row-span-2 bg-white rounded-2xl shadow-lg p-6">
            <div className="font-semibold mb-3">100万明星计划余额走势</div>
            <div className="h-48 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 text-sm">
              折线图占位（可接 ECharts）
            </div>
          </div>

          {/* 主流币种 */}
          <div className="col-span-4  row-span-2 bg-white rounded-2xl shadow-lg p-6">
            <div className="font-semibold mb-3">主流币种</div>
            <ul className="text-sm space-y-2">
              <li>
                BTC ¥43419.20 <span className="text-red-500 text-xs">-3.5%</span>
              </li>
              <li>
                ETH ¥2279.63 <span className="text-green-500 text-xs">+2.8%</span>
              </li>
              <li>USDT ¥7.15</li>
              <li>XRP ¥4.00</li>
              <li>ADA ¥3.40</li>
            </ul>
          </div>

          {/* 今日成交 + 热门用户 + Premium 三卡片并排展示 */}
          <div className="col-span-4 bg-white rounded-2xl shadow-lg p-6 overflow-x-auto flex flex-col justify-between">
            <div>
              <div className="font-semibold mb-3">今日社区成交</div>
              <table className="w-full min-w-[500px] text-sm">
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
          </div>

          <div className="col-span-4 bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
            <div>
              <div className="font-semibold mb-3">今日热门用户</div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>👤 七星战神</li>
                <li>👤 七星战神</li>
                <li>👤 七星战神</li>
                <li>👤 七星战神</li>
              </ul>
            </div>
          </div>

          <div className="col-span-4 bg-blue-100 rounded-2xl shadow-lg p-6 text-center flex flex-col justify-between">
            <div>
              <div className="font-semibold text-blue-700 mb-2">TRY OUR PREMIUM FEATURES</div>
              <p className="text-sm text-blue-600 mb-3">Let AI help you understand crypto!</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
              Explore Features
            </button>
          </div>
        </div>
      </div>

  )
}

export default CryptoStatsHeader

import PropTypes from "prop-types";

// 公链数据
const chains = [
  { key: "all", label: "全部公链", icon: "" },
  { key: "bsc", label: "BSC", icon: "", imgPath: "/assets/icons/bsc.png" },
  { key: "sol", label: "SOL", icon: "", imgPath: "/assets/icons/sol.svg" },
  { key: "eth", label: "ETH", icon: "", imgPath: "/assets/icons/eth.svg" },
  { key: "base", label: "BASE", icon: "", imgPath: "/assets/icons/base.svg" },
  { key: "tron", label: "TRON", icon: "", imgPath: "/assets/icons/tron.svg" },
  { key: "op", label: "OP", icon: "", imgPath: "/assets/icons/op.png" },
  { key: "btc", label: "BTC", icon: "", imgPath: "/assets/icons/btc.png" },
  { key: "ava", label: "AVA", icon: "", imgPath: "/assets/icons/ava.svg" },
];

// 社区数据
const communities = [
  { key: "all", label: "全部社区"},
  { key: "x", label: "X", icon: "𝕏" },
  { key: "telegram", label: "Telegram", icon: "✈️" },
  { key: "wechat", label: "Wechat", icon: "💬" },
  { key: "qq", label: "QQ", icon: "🐧" },
  { key: "others", label: "其他", icon: "➕" },
];

// 话题数据
const mainTopics = [
  { key: "new", label: "社区新CA", icon: "" },
  { key: "person", label: "聪明人", icon: "🧠" },
  { key: "hot", label: "热议CA", icon: "🔥" },
  { key: "topics", label: "热门话题", icon: "📢" },
  { key: "list", label: "聪明人榜单", icon: "📋" },
];

// 时间选项数据
const timeOptions = [
  { key: "1440", label: "全天", value: 1440 },
  { key: "1", label: "1分钟", value: 1 },
  { key: "3", label: "3分钟", value: 3 },
  { key: "5", label: "5分钟", value: 5 },
  { key: "10", label: "10分钟", value: 10 },
  { key: "20", label: "20分钟", value: 20 },
  { key: "30", label: "30分钟", value: 30 },
];

const ChainTabs = ({ 
  activeChain = "all", 
  onChainChange, 
  activeCommunity = "all", 
  onCommunityChange,
  activeTopic = "new",
  onTopicChange,
  isAutoRefreshing,
  onAutoRefreshToggle,
  onToggleFullscreen,
  activeTimeOption = "5",
  onTimeOptionChange,
}) => {
  return (
    <div className="flex flex-col w-full gap-3">
      {/* 公链选择区 */}
      <div className="p-1">
        <div className="flex flex-nowrap overflow-x-auto whitespace-nowrap gap-1 hide-scrollbar">
          {chains.map((chain) => (
            <div
              key={chain.key}
              onClick={() => onChainChange && onChainChange(chain.key)}
              className={`flex-shrink-0 flex items-center gap-1 px-3 py-1 rounded-full cursor-pointer transition-all duration-200 text-xs ${
                activeChain === chain.key
                  ? "bg-[#f8f9fa] font-medium text-[#003df6]"
                  : "hover:bg-gray-50"
              }`}
            >
              {chain.imgPath ? <img src={chain.imgPath} alt={chain.label} style={{width:20, height:20}} /> : null}
              <span>{chain.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 社区选择区 */}
      <div className="p-1">
        <div className="flex flex-wrap gap-1 items-center">
          {communities.map((community) => (
            <div
              key={community.key}
              onClick={() => onCommunityChange && onCommunityChange(community.key)}
              className={`flex items-center gap-1 px-3 py-1 rounded-full cursor-pointer transition-all duration-200 text-xs ${
                activeCommunity === community.key
                  ? "bg-[#f8f9fa] font-medium text-[#003df6]"
                  : "hover:bg-gray-50"
              }`}
            >
              <span>{community.icon}</span>
              <span>{community.label}</span>
            </div>
          ))}
          {/* 搜索框 */}
          <div className="ml-2 relative">
            <input
              type="text"
              placeholder="Search lives..."
              className="pl-8 pr-4 py-1 text-xs rounded-full border border-gray-200 focus:outline-none focus:border-gray-300"
            />
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 话题选择区 */}
      <div className="p-1">
        <div className="flex justify-between items-center w-full flex-wrap gap-2 md:gap-0">
          <div className="flex gap-2 flex-wrap">
            {mainTopics.map((topic) => (
              <div
                key={topic.key}
                onClick={() => onTopicChange && onTopicChange(topic.key)}
                className={`flex items-center gap-1 px-3 py-1 rounded-full cursor-pointer transition-all text-xs ${
                  activeTopic === topic.key
                    ? "bg-[#f8f9fa] font-medium text-[#003df6]"
                    : "hover:bg-gray-50"
                }`}
              >
                <span>{topic.icon}</span>
                <span>{topic.label}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-2 items-center flex-wrap">
            {/* 时间选择区 - 在activeTopic为"new"或"hot"时显示 */}
            {(activeTopic === "new" || activeTopic === "hot") && (
              <div className="flex flex-col gap-1">
                <div className="flex gap-2 flex-wrap">
                  {timeOptions.map((option) => (
                    <div
                      key={option.key}
                      onClick={() => onTimeOptionChange && onTimeOptionChange(option.key)}
                      className={`flex items-center gap-1 px-3 py-1 rounded-full cursor-pointer transition-all text-xs ${
                        activeTimeOption === option.key
                          ? "bg-[#f8f9fa] font-medium text-[#003df6]"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <span>{option.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* 刷新控制按钮 */}
            <button
                onClick={onAutoRefreshToggle}
                className={`flex items-center gap-1 px-3 py-1 rounded-full cursor-pointer transition-all text-xs ${
                    isAutoRefreshing ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'
                }`}
            >
                <span>{isAutoRefreshing ? '⏱️' : '🔄'}</span>
                <span>{isAutoRefreshing ? '自动刷新中' : '暂停刷新'}</span>
            </button>
            {/* 全屏按钮 */}
            <button
              className="ml-2 bg-none border-none cursor-pointer hidden sm:inline-flex"
              title="全屏"
              onClick={onToggleFullscreen}
            >
              <img src="/home/changesmall.png" alt="fullscreen" style={{width:20, height:20}} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ChainTabs.propTypes = {
  activeChain: PropTypes.string,
  onChainChange: PropTypes.func,
  activeCommunity: PropTypes.string,
  onCommunityChange: PropTypes.func,
  activeTopic: PropTypes.string,
  onTopicChange: PropTypes.func,
  isAutoRefreshing: PropTypes.bool,
  onAutoRefreshToggle: PropTypes.func,
  onToggleFullscreen: PropTypes.func,
  activeTimeOption: PropTypes.string,
  onTimeOptionChange: PropTypes.func,
};

export default ChainTabs;
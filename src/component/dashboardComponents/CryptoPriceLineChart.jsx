import { useState, useEffect } from 'react';
import ChainTabs from './ChainTabs';
import CA from './CA';
import PropTypes from 'prop-types';

const CryptoPriceLineChart = ({ onToggleFullscreen, isFullScreen }) => {
  const [activeChain, setActiveChain] = useState('all');
  const [activeCommunity, setActiveCommunity] = useState('all');
  const [activeTopic, setActiveTopic] = useState('new'); // 默认选中 "社区新CA"
  const [isAutoRefreshing, setIsAutoRefreshing] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);
  const [activeTimeOption, setActiveTimeOption] = useState('1440'); // 默认选中全天

  useEffect(() => {
    let interval;
    if (isAutoRefreshing && activeTopic === 'new') {
      interval = setInterval(() => {
        setRefreshKey(prevKey => prevKey + 1);
      }, 5000); // Refresh every 5 seconds
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoRefreshing, activeTopic]);

  const handleChainChange = (chain) => {
    setActiveChain(chain);
    // 这里可以添加其他处理逻辑，如获取对应链的数据等
  };

  const handleCommunityChange = (community) => {
    setActiveCommunity(community);
    // 这里可以添加其他处理逻辑，如获取对应社区的数据等
  };

  const handleTopicChange = (topic) => {
    // 当选择其他话题时，更新话题并关闭自动刷新
    setActiveTopic(topic);
    setIsAutoRefreshing(false);
  };

  const handleAutoRefreshToggle = () => {
    setIsAutoRefreshing(prev => !prev);
  };

  const handleTimeOptionChange = (timeOption) => {
    setActiveTimeOption(timeOption);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow p-4 mt-6 overflow-hidden">
      
      <ChainTabs
        activeChain={activeChain}
        onChainChange={handleChainChange}
        activeCommunity={activeCommunity}
        onCommunityChange={handleCommunityChange}
        activeTopic={activeTopic}
        onTopicChange={handleTopicChange}
        isAutoRefreshing={isAutoRefreshing}
        onAutoRefreshToggle={handleAutoRefreshToggle}
        onToggleFullscreen={onToggleFullscreen}
        activeTimeOption={activeTimeOption}
        onTimeOptionChange={handleTimeOptionChange}
      />
      
      {/* 将当前选择的内容隐藏，可选择保留或删除 */}
      {/* <div className="mt-4 p-4 bg-gray-50 rounded-lg">
        <p className="text-gray-700">
          当前选择：{activeChain} / {activeCommunity} / {activeTopic}
        </p>
      </div> */}
      
      {/* 引入CA组件，显示加密货币卡片 */}
      <CA
        activeChain={activeChain}
        isAutoRefreshing={isAutoRefreshing}
        isFullScreen={isFullScreen}
        activeTopic={activeTopic}
        refreshKey={refreshKey}
        activeTimeOption={activeTimeOption}
      />
    </div>
  );
};

CryptoPriceLineChart.propTypes = {
  onToggleFullscreen: PropTypes.func,
  isFullScreen: PropTypes.bool
};

export default CryptoPriceLineChart;

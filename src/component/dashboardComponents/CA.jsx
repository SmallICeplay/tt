import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import { useState as useReactState } from 'react';

// 单个加密货币卡片组件
const CryptoCard = ({ 
  isNew = false, 
  symbol, 
  price, 
  description, 
  contractAddress,
  multiplier,
  logoUrl,
  marketCap,
  volume,
  circulation,
  time,
  signal,
  mainTag,
  features = [],
  qyTx,
  qnqyName,
  msg_index,
  isNewlyRefreshed = false,
  refreshKey
}) => {
  const [copied, setCopied] = useReactState(false);
  const [showHighlight, setShowHighlight] = useState(isNewlyRefreshed);

  useEffect(() => {
    if (isNewlyRefreshed) {
      setShowHighlight(true);
      const timer = setTimeout(() => {
        setShowHighlight(false);
      }, 2 * 60 * 1000); // 2 minutes
      return () => clearTimeout(timer);
    }
  }, [isNewlyRefreshed, refreshKey]);

  const handleCopy = () => {
    if (!contractAddress) return;
    // 优先用现代API
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(contractAddress).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      });
    } else {
      // 兼容老环境
      const textarea = document.createElement('textarea');
      textarea.value = contractAddress;
      textarea.style.position = 'fixed';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      } catch (err) {
        // 可选：提示复制失败
      }
      document.body.removeChild(textarea);
    }
  };
  return (
    <div className={`bg-white border border-gray-200 rounded-lg p-2 relative h-full flex flex-col text-xs min-h-[150px] max-h-[200px] w-full transition-colors duration-500 `}>
      {/* 新标签 */}
      {isNew && (
        <div className="absolute top-1 left-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded-full">
          NEW
        </div>
      )}
      
      {/* 转发按钮 */}
      <div className="absolute top-1 right-1">
        <button className="bg-gray-100 hover:bg-gray-200 p-0.5 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </button>
      </div>
      
      {/* 顶部币种信息 */}
      <div className="flex items-start mt-1 justify-between">
        {/* 左侧头像 */}
        <div className="flex flex-col items-center mr-2 min-w-[2.5rem]">
          {logoUrl ? (
            <img src={logoUrl} alt={symbol} className="w-9 h-9 bg-blue-100 rounded-full" />
          ) : (
            <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-bold text-sm">
              {symbol?.charAt(0)}
            </div>
          )}
        </div>
        {/* 中间币种信息 */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center">
            <span className="font-bold text-xs">${symbol}</span>
            <span className="ml-1 text-xs text-[#ec3c4e] truncate">{price}</span>
          </div>
          {/* 币种特性图标组 */}
          <div className="flex items-center space-x-2 my-0.5">
            {features.map((item, idx) => (
              <span key={idx} className="flex items-center">
                {item.icon && <span className={item.iconClass} style={item.iconStyle}>{item.icon}</span>}
                {item.text && <span className={item.textClass} style={item.textStyle}>{item.text}</span>}
              </span>
            ))}
          </div>
          <div className="text-xs text-gray-500 truncate leading-tight">市值: {marketCap} 量: {volume} 流通: {circulation}</div>
        </div>
        {/* 右侧按钮和multiplier */}
        <div className="flex flex-col items-end ml-2 min-w-[2.5rem]">
          <div className="relative">
           
            {/* multiplier */}
            <div className="text-xs font-bold text-green-500 mt-4 text-right">×{multiplier}</div>
          </div>
        </div>
      </div>
      
      {/* 描述+合约地址 */}
      <div className="mt-2 bg-gray-50 rounded px-1 py-1 min-h-[2.2rem] flex flex-col justify-between">
        <div className="text-xs text-gray-600 break-all line-clamp-3 min-h-[3.6em]">
          {description}
        </div>
        <div className="mt-1 flex items-center">
          <div className="bg-gray-100 text-xs px-1.5 py-0.5 rounded-full truncate max-w-[calc(100%-2.2rem)] text-blue-700">
            {contractAddress?.substring(0, 15)}...{contractAddress?.substring(contractAddress.length - 15)}
          </div>
          <button onClick={handleCopy} className="ml-1 bg-gray-100 p-1 rounded-full flex-shrink-0 relative" title="复制合约地址">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            {copied && (
              <span className="absolute left-1/2 -translate-x-1/2 top-7 text-xs bg-black text-white px-2 py-0.5 rounded z-10 whitespace-nowrap">已复制</span>
            )}
          </button>
        </div>
      </div>
      
      {/* 底部信息 */}
      <div className="mt-3 flex justify-between items-center text-xs">
        <div className="flex items-center overflow-hidden">
          <span className="flex items-center mr-1">
            <img src={qyTx} alt="icon" className="w-4 h-4 rounded-full mr-0.5" />
            <span className="font-bold text-black max-w-[5rem] truncate" title={mainTag}>{mainTag}</span>
            <span className="ml-0.5 text-blue-700 max-w-[6rem] truncate" title={qnqyName}>{qnqyName}</span>
            {msg_index > 0 && (
              <span className="ml-1 px-1.5 py-0.5 text-xs  text-black font-semibold">
                {msg_index === 1 ? '首猎' : `第${msg_index}次`}
              </span>
            )}
          </span>
          <span className="flex items-center ml-1">
            <span className="w-3 h-3 bg-green-400 rounded-full flex items-center justify-center mr-0.5">
              <svg width="10" height="10" fill="none" viewBox="0 0 24 24"><path d="M12 8v4l2 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className="text-black">{time}</span>
          </span>
        </div>
        <div className="flex items-center ml-1 relative">
          <span className="text-gray-500  sm:inline">信号后</span>
          {Number(signal) > 1 ? (
            <span className="ml-0.5 flex items-center text-green-500">
              <svg className="w-3 h-3 mr-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 17L19 7M19 7v6M19 7h-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
              {signal}×
            </span>
          ) : (
            <span className="ml-0.5 flex items-center text-red-500">
              <svg className="w-3 h-3 mr-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 7l14 10M19 17v-6M19 17h-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/></svg>
              {signal}×
            </span>
          )}
         
          <svg className="ml-1 w-2 h-2 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </div>
    </div>
  );
};

// 设置PropTypes
CryptoCard.propTypes = {
  isNew: PropTypes.bool,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.string,
  description: PropTypes.string,
  contractAddress: PropTypes.string,
  multiplier: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  logoUrl: PropTypes.string,
  marketCap: PropTypes.string,
  volume: PropTypes.string,
  circulation: PropTypes.string,
  time: PropTypes.string,
  signal: PropTypes.string,
  mainTag: PropTypes.string,
  features: PropTypes.array,
  qyTx: PropTypes.string,
  qnqyName: PropTypes.string,
  msg_index: PropTypes.number,
  isNewlyRefreshed: PropTypes.bool,
  refreshKey: PropTypes.number
};

// CA组件 - 展示卡片，数据通过props传入
const CA = ({ data = [], activeChain, isAutoRefreshing, activeTopic, isFullScreen = false, refreshKey, activeTimeOption = "1440" }) => {
  const [cryptoData, setCryptoData] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [pageSize, setPageSize] = useState(18);
  const [pageSizeChanged, setPageSizeChanged] = useState(false);

  // 记录上���次的页码，用于判断是否是由分页器触发的页面变化
  const [lastRefreshKey, setLastRefreshKey] = useState(0);
  
  useEffect(() => {
    // 判断是否是由refreshKey变化触发的更新
    const isRefreshKeyChange = refreshKey !== lastRefreshKey;
    setLastRefreshKey(refreshKey);
    
    if (pageSizeChanged) {
      console.log(1);
      fetchData(1, true); // Force refetch from page 1 when page size changes
      setPageSizeChanged(false); // Reset the flag
    } else if (isAutoRefreshing && activeTopic === 'new' && isRefreshKeyChange) {
      // 只有当是由refreshKey变化触发的更新时，才执行自动刷新
      fetchData(1, true);
      console.log(2);
    } else {
      console.log('page', page);
      fetchData(page);
    }
  }, [page, pageSize, activeChain, isAutoRefreshing, activeTopic, refreshKey, pageSizeChanged, activeTimeOption]);



  const fetchData = async (pageNum, isRefresh = false) => {
    // 只有在第一次加载且有props数据时才使用props数据，分页时始终调用API
    if (data.length > 0 && !isRefresh && pageNum === 1 && page === 1) {
      // 如果是"hot"主题，按msg_index排序
      const sortedData = activeTopic === 'hot' ? [...data].sort((a, b) => (b.msg_index || 0) - (a.msg_index || 0)) : data;
      setCryptoData(sortedData);
      // 为props数据设置默认分页信息
      const estimatedTotal = sortedData.length > pageSize ? sortedData.length * 2 : sortedData.length;
      setTotal(estimatedTotal);
      return;
    }
    try {
      const res = await axios.get(`/wx-ca?page=${pageNum}&pageSize=${pageSize}${activeChain && activeChain !== 'all' ? `&chain=${activeChain}` : ''}${(activeTopic === 'new' || activeTopic === 'hot') ? `&minutes=${activeTimeOption}` : ''}`);
      let formattedData = [];
      if (res && res.data && Array.isArray(res.data.data)) {
        formattedData = res.data.data.map(item => ({
          isNew: item.isNew || false,
          symbol: item.symbol || 'UNKNOWN',
          price: item.current_price_usd ?Number(item.current_price_usd).toFixed(10) : '0.00000',
          description: item.description || ' ',
          contractAddress: item.msg || '0x0000',
          multiplier: (item.current_price_usd && item.launch_price && Number(item.launch_price) !== 0)
            ? (Number(item.current_price_usd) / Number(item.launch_price)).toFixed(2)
            : ' ',
          logoUrl: item.logo_url || '',
          marketCap: item.market_cap
            ? (Number(item.market_cap) >= 1000
                ? (Number(item.market_cap) / 1000).toFixed(2) + 'K'
                : Number(item.market_cap).toFixed(2))
            : '0',
          volume: item.total ? (Number(item.total) / 1e8).toFixed(2) + '亿' : '0亿',
          circulation: (item.total && item.lock_amount && item.burn_amount && item.other_amount)
            ? ((Number(item.total) - Number(item.lock_amount) - Number(item.burn_amount) - Number(item.other_amount)) / 1e8).toFixed(2) + '亿'
            : '0亿',
          time: item.time ? timeAgo(item.time) : '刚刚',
          signal: Number(item.price_change_24h / 100+1).toFixed(2) || ' ',
          mainTag: parseSymbols(item.qun_name) || ' ',
          features: item.features || [],
          qyTx: item.qy_tx || '/avatar-placeholder.png',
          qnqyName: parseSymbols(item.qy_name) || ' ',
          msg_index: item.msg_index || 0,
          isNewlyRefreshed: isRefresh
        }));
      }
      // if (formattedData.length === 0) {
      //   setError('');
      // }
      
      // 如果是"hot"主题，按msg_index排序
      if (activeTopic === 'hot') {
        formattedData.sort((a, b) => (b.msg_index || 0) - (a.msg_index || 0));
      }
      
      setCryptoData(formattedData);
      // 如果API没有返回分页信息，根据数据长度估算总数
      if (res.data.pagination && res.data.pagination.total) {
        setTotal(res.data.pagination.total);
      } else {
        // 如果没有分页信息，假设至少有当前页的数据量
        const estimatedTotal = formattedData.length > 0 ? Math.max(formattedData.length, pageSize * page) : 0;
        setTotal(estimatedTotal);
      }
    } catch (err) {
      console.log('CA组件API调用失败，使用模拟数据:', err.message);

      // 提供一些模拟数据以避免界面为空
      const mockData = [
        {
          isNew: true,
          symbol: 'DEMO',
          price: '0.0001234567',
          description: '演示加密货币数据',
          contractAddress: '0x1234567890abcdef',
          multiplier: '125.50',
          logoUrl: '',
          marketCap: '1.5M',
          volume: '2.3亿',
          circulation: '1.8亿',
          time: '5分钟前',
          signal: '1.25',
          mainTag: '演示社区',
          features: ['热门', '新上线'],
          qyTx: '/avatar-placeholder.png',
          qnqyName: '社区管理员',
          msg_index: 100,
          isNewlyRefreshed: false
        },
        {
          isNew: false,
          symbol: 'TEST',
          price: '0.0005678901',
          description: '测试代币数据',
          contractAddress: '0xabcdef1234567890',
          multiplier: '89.20',
          logoUrl: '',
          marketCap: '850K',
          volume: '1.2亿',
          circulation: '0.9亿',
          time: '10分钟前',
          signal: '0.92',
          mainTag: '测试社区',
          features: ['稳定'],
          qyTx: '/avatar-placeholder.png',
          qnqyName: '测试用户',
          msg_index: 85,
          isNewlyRefreshed: false
        }
      ];

      setCryptoData(mockData);
      setTotal(mockData.length);
      setError(null); // 清除错误状态，使用模拟数据
    }
  };

  // 当传入的props数据变化时，更新显示的数据
  useEffect(() => {
    if (data.length > 0) {
      // 如果是"hot"主题，按msg_index排序
      const sortedData = activeTopic === 'hot' ? [...data].sort((a, b) => (b.msg_index || 0) - (a.msg_index || 0)) : data;
      setCryptoData(sortedData);
      // 如果有新的props数据，清除错误状态
      setError(null);
    }
  }, [data, activeTopic]);

  // 分页器组件
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const [inputPage, setInputPage] = useState('');
  const Pagination = () => {
    // 每页数量选项
    const pageSizeOptions = [18, 36, 54, 72];
    // 只显示当前页前后各2页
    const pageNumbers = [];
    let start = Math.max(1, page - 2);
    let end = Math.min(totalPages, page + 2);
    if (page <= 3) end = Math.min(totalPages, 5);
    if (page >= totalPages - 2) start = Math.max(1, totalPages - 4);
    for (let i = start; i <= end; i++) pageNumbers.push(i);
    
    // 如果只有一页，也显示基本的分页信息
    const showNavigation = totalPages > 1;
    return (
      <div className="flex flex-wrap justify-center items-center mt-6 space-x-1">
        {showNavigation && (
          <>
            <button
              className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm font-bold transition-colors ${page === 1 ? 'bg-gray-200 text-gray-400 border-gray-200' : 'bg-white hover:bg-gray-100 text-gray-700 border-gray-300'}`}
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              aria-label="上一页"
            >
              &lt;
            </button>
            {start > 1 && <span className="px-1">...</span>}
            {pageNumbers.map(num => (
              <button
                key={num}
                className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm font-bold mx-0.5 transition-colors ${num === page ? 'bg-blue-500 text-white border-blue-500' : 'bg-white hover:bg-gray-100 text-gray-700 border-gray-300'}`}
                onClick={() => setPage(num)}
                disabled={num === page}
              >
                {num}
              </button>
            ))}
            {end < totalPages && <span className="px-1">...</span>}
            <button
              className={`w-8 h-8 rounded-full border flex items-center justify-center text-sm font-bold transition-colors ${page === totalPages ? 'bg-gray-200 text-gray-400 border-gray-200' : 'bg-white hover:bg-gray-100 text-gray-700 border-gray-300'}`}
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              aria-label="下一页"
            >
              &gt;
            </button>
          </>
        )}
        <span className="ml-3 text-gray-500 text-sm">共 {totalPages} 页 (共 {total} 条)</span>
        {showNavigation && (
          <form
            className="ml-3 flex items-center"
            onSubmit={e => {
              e.preventDefault();
              const n = Number(inputPage);
              if (n >= 1 && n <= totalPages) setPage(n);
            }}
          >
            <input
              type="number"
              min="1"
              max={totalPages}
              value={inputPage}
              onChange={e => setInputPage(e.target.value.replace(/^0+/, ''))}
              className="w-14 px-2 py-1 border rounded text-sm mx-1"
              placeholder="跳转页"
            />
            <button type="submit" className="px-2 py-1 bg-blue-500 text-white rounded text-xs">跳转</button>
          </form>
        )}
        <select
          className="ml-3 px-2 py-1 border rounded text-sm"
          value={pageSize}
          onChange={e => {
            setPage(1);
            setPageSize(Number(e.target.value));
            setPageSizeChanged(true);
          }}
        >
          {pageSizeOptions.map(opt => (
            <option key={opt} value={opt}>{opt} 条/页</option>
          ))}
        </select>
      </div>
    );
  };

  return (
    <div className="mt-4 overflow-hidden pb-6">
      {/* {loading && <div className="text-center py-4">加载中...</div>} */}
     
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${isFullScreen ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-3`}>
        {cryptoData.map((crypto, index) => (
          <div key={crypto.contractAddress || index} className="w-full">
            <CryptoCard
              isNew={crypto.isNew}
              symbol={crypto.symbol}
              price={crypto.price}
              description={crypto.description}
              contractAddress={crypto.contractAddress}
              multiplier={crypto.multiplier}
              logoUrl={crypto.logoUrl}
              marketCap={crypto.marketCap}
              volume={crypto.volume}
              circulation={crypto.circulation}
              time={crypto.time}
              signal={crypto.signal}
              mainTag={crypto.mainTag}
              features={crypto.features}
              qyTx={crypto.qyTx}
              qnqyName={crypto.qnqyName}
              msg_index={crypto.msg_index}
              isNewlyRefreshed={crypto.isNewlyRefreshed}
              refreshKey={refreshKey}
            />
          </div>
        ))}
      </div>
      {/* 始终显示分页器，即使只有一页数据 */}
      {cryptoData.length > 0 && <Pagination />}
    </div>
  );
};

CA.propTypes = {
  data: PropTypes.array,
  activeChain: PropTypes.string,
  isAutoRefreshing: PropTypes.bool,
  activeTopic: PropTypes.string,
  isFullScreen: PropTypes.bool,
  refreshKey: PropTypes.number,
  activeTimeOption: PropTypes.string
};

// Function to parse symbols from a string
function parseSymbols(encodedStr) {
  // 1. 处理普通情况：直接替换 'u' 为 '\u' 并解析
  try {
    const unicodeStr = encodedStr.replace(/u([0-9a-fA-F]{4})/g, '\\u$1');
    return JSON.parse(`"${unicodeStr}"`);
  } catch (e) {
    // 2. 处理特殊情况：手动解码代理对
    const surrogatePairs = encodedStr.match(/uD[89ab][0-9a-f]{2}uD[c-f][0-9a-f]{2}/g) || [];
    let result = '';
    let lastIndex = 0;
    
    surrogatePairs.forEach(pair => {
      const index = encodedStr.indexOf(pair, lastIndex);
      // 添加前面的普通文本
      result += encodedStr.slice(lastIndex, index);
      
      // 解码代理对
      const high = parseInt(pair.substring(1, 5), 16);
      const low = parseInt(pair.substring(6, 10), 16);
      result += String.fromCodePoint(
        (high - 0xD800) * 0x400 + (low - 0xDC00) + 0x10000
      );
      
      lastIndex = index + pair.length;
    });
    
    // 添加剩余文本
    result += encodedStr.slice(lastIndex);
    return result;
  }
}
function timeAgo(ts) {
  const now = Date.now();
  let t;
  
 
    t = String(ts).length === 10 ? Number(ts) * 1000 : Number(ts);
  
  
  const diff = Math.max(0, now - t); // 毫秒
  const min = 60 * 1000;
  const hour = 60 * min;
  const day = 24 * hour;
  if (diff < min) return '刚刚';
  if (diff < hour) return `${Math.floor(diff / min)}分`;
  if (diff < day) return `${Math.floor(diff / hour)}时`;
  return `${Math.floor(diff / day)}天`;
}


export default CA;

import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const smartCommunities = [
  { name: '&天天开心', info: '130个聪明CA' },
  { name: '&量角器出发', info: '130个聪明BCA' },
  { name: '&初心扫链金狗群', info: '130个聪明BCA' },
  { name: '&小姨的富婆俱乐部', info: '130个聪明BCA' },
  { name: '&香港知识点', info: '130个聪明CA' },
];

const activeCommunities = [
  { name: '&外卖配送001', info: '12W条' },
  { name: '&bydog', info: '12W条' },
  { name: '&TIN现货俱乐部', info: '12W条' },
];

const topDealCommunities = [
  { name: '&外卖配送001', info: '12B' },
  { name: '&bydog', info: '12B' },
  { name: '&TIN现货俱乐部', info: '12B' },
];

const Section = ({ icon, title, list }) => (
  <div className="bg-white rounded-lg p-2.5 mb-2.5 shadow-[0_2px_8px_#f0f1f2]">
    <div className="flex items-center mb-2">
      <span className="text-lg mr-1.5">{icon}</span>
      <span className="flex-1 text-sm">{title}</span>
      <button className="bg-none border-none cursor-pointer text-sm" title="刷新">
        <img src="/home/Refresh.png" alt="refresh" style={{width:50, height:22}} />
      </button>
    </div>
    <ol className="m-0">
      {list.map((item, idx) => (
        <li key={item.name} className="mb-2 flex justify-between items-center text-xs">
          <span className="text-gray-500 w-6 text-right">{idx + 1}.</span>
          <span className="flex-1 ml-1">{item.name}</span>
          <span className="text-gray-400 text-xs min-w-[60px] text-right">{item.info}</span>
        </li>
      ))}
    </ol>
  </div>
);

Section.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const AirdropCard = ({ t }) => (
  <div className="bg-white rounded-lg p-3 mb-3 shadow-[0_2px_8px_#f0f1f2]">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center">
        <span className="mr-2">
          
          <img src="/home/Filter.png" alt="fire" style={{width:20, height:20}} />
        </span>
        <span className="text-sm">{t('airdrop') || '今日优质空投'}</span>
      </div>
      <button className="bg-none border-none cursor-pointer text-sm" title="刷新">
        <img src="/home/Refresh.png" alt="refresh" style={{width:50, height:22}} />
      </button>
    </div>
    <div className="bg-blue-600 rounded-2xl p-4 text-white">
      <div className="mb-2">
        <span className="bg-blue-200 text-blue-800 rounded-2xl px-4 py-1.5 text-xs font-medium mr-2">First mover</span>
      </div>
      <div className="text-xs leading-snug mb-1">Snakes On An NFT game has launched with rewards of up to 100 BUSD for completing levels</div>
      <div className="text-blue-100 text-xs mb-3">Snakes On An NFT Game features 22 action packed levels with increasi</div>
      <div className="flex items-center text-xs">
        <span className="flex items-center mr-3">
          <svg className="mr-1" width="16" height="16" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5c-5 0-8 4.5-8 6.5s3 6.5 8 6.5 8-4.5 8-6.5-3-6.5-8-6.5zm0 11c-3.9 0-7-3.1-7-4.5S6.1 5.5 10 5.5s7 3.1 7 4.5-3.1 4.5-7 4.5zm0-7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/></svg>
          1M Views
        </span>
        <span className="ml-auto cursor-pointer">Read more...</span>
      </div>
    </div>
  </div>
);

AirdropCard.propTypes = {
  t: PropTypes.func.isRequired,
};

// Top News Card
const TopNewsCard = ({ t }) => (
  <div className="bg-white rounded-xl p-4 mb-3 shadow-[0_2px_8px_#f0f1f2]">
    <div className="flex items-center justify-between mb-3">
      <span className="text-sm text-gray-800">{t('topNews') || 'Top News'}</span>
      <span className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
          <path d="M7 17l5-5 5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </div>
    <div className="mb-4">
      <a href="#" className="text-blue-600 text-sm hover:underline block mb-1">XBOT即将上线NFT社区</a>
      <div className="text-gray-500 text-xs leading-snug">
        As investors continue to await approval of a spot bitcoin exchange-traded fund (ETF) in the U.S., a check of Brazil finds hefty demand for such vehicles which have...
      </div>
    </div>
    <div>
      <a href="#" className="text-blue-600 text-sm hover:underline block mb-1">XBOT生成聪明人海报</a>
      <div className="text-gray-500 text-xs leading-snug">
        想秀出的战绩吗?只需要登陆XBOI.MEME，找到你的聪明人专属页面，输入/海报 消耗100积分，就可以获取你的专属战绩海报。
      </div>
    </div>
  </div>
);

TopNewsCard.propTypes = {
  t: PropTypes.func.isRequired,
};

const CryptoSocialsCarousel = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-[380px] mx-auto p-1 block">
      <AirdropCard t={t} />
      <div className="hidden sm:block">
        <Section icon={<img src="/home/Filter.png" alt="fire" style={{width:20, height:20}} />} title={t('24HSmartCommunity') || '24H最聪明社区'} list={smartCommunities} />
        <Section icon={<img src="/home/Filter.png" alt="fire" style={{width:20, height:20}} />} title={t('24HActiveCommunity') || '24H最活跃社区'} list={activeCommunities} />
        <Section icon={<img src="/home/Filter.png" alt="fire" style={{width:20, height:20}} />} title={t('24HDealCommunity') || '24H成交最高社区'} list={topDealCommunities} />
        <TopNewsCard t={t} />
      </div>
    </div>
  );
};

export default CryptoSocialsCarousel;


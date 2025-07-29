import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaBitcoin } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import PropTypes from "prop-types";
import { useTranslation } from 'react-i18next';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;
  const { t } = useTranslation();

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div className="h-full">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-[#f6f8fa] bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col h-full absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 overflow-y-hidden lg:overflow-y-auto no-scrollbar shrink-0 bg-[#f6f8fa] p-3 transition-all duration-200 ease-in-out border-r border-gray-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        } ${sidebarExpanded ? "w-56" : "w-20"}`}
        style={{ width: sidebarExpanded ? '14rem' : '5rem' }}
      >
        {/* Sidebar header */}
        <div className={`flex items-center mb-1 pr-2 sm:px-0 mt-3 relative ${sidebarExpanded ? 'justify-between' : 'justify-center'}`}>
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-[#DFE1E7] hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo/头像+标题 */}
          {sidebarExpanded ? (
            <div className="flex items-center">
              <img src="/siderbar/head.png" alt="logo" className="rounded-full object-cover w-9 h-9 transition-all duration-200" />
              <div className="ml-2 flex flex-col justify-center">
                <div className="text-base font-medium text-black leading-tight">XBOT.MEME</div>
                <div className="text-xs text-[#818898] leading-tight">Finance App</div>
              </div>
            </div>
          ) : null}
          {/* 收缩按钮，始终在顶部，根据展开状态居中或靠右 */}
          <button
            className="flex-shrink-0 w-6 h-6 rounded-full border-[0.5px] border-dashed border-gray-200 bg-white flex items-center justify-center shadow-none transition-all duration-200"
            onClick={() => setSidebarExpanded(!sidebarExpanded)}
            style={{ marginLeft: sidebarExpanded ? '0.5rem' : '0' }}
          >
            <span className="sr-only">Expand / collapse sidebar</span>
            <svg className={`w-3 h-3 text-gray-600 transition-transform duration-200 ${sidebarExpanded ? '' : 'rotate-180'}`} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              ></span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block"></span>
            </h3>
            <ul className="mt-2">
              {/* Dashboard */}
              <li className={`px-2 py-1 rounded-sm flex items-center justify-center text-xs font-medium text-[#818898] hover:bg-[#f0f1f2] cursor-pointer transition duration-150 ${sidebarExpanded ? 'justify-start' : 'justify-center'} ${pathname === '/' ? 'bg-[#ffffff]' : ''}`} style={{ minHeight: '28px' }}>
                <NavLink end to="/" className="flex items-center w-full" style={{ textDecoration: 'none' }}>
                  <AiFillDashboard className={`text-base ${sidebarExpanded ? 'mr-3' : 'mx-auto'}`} />
                  {sidebarExpanded && <span>{t('home')}</span>}
                </NavLink>
              </li>
              {/* Members */}
              <li className={`px-2 py-1 rounded-sm flex items-center justify-center text-xs font-medium text-[#818898] hover:bg-[#f0f1f2] cursor-pointer transition duration-150 ${sidebarExpanded ? 'justify-start' : 'justify-center'} ${pathname.includes('members') ? 'bg-[#ffffff]' : ''}`} style={{ minHeight: '28px' }}>
                <NavLink end to="/members" className={`flex items-center ${sidebarExpanded ? 'w-full' : 'justify-center w-auto'} `} style={{ textDecoration: 'none' }}>
                  <BsFillPeopleFill className={`text-base ${sidebarExpanded ? 'mr-3' : ''}`} />
                  {sidebarExpanded && <span>{t('communityNFT')}</span>}
                </NavLink>
              </li>
              {/* BitCoin Prices */}
              <li className={`px-2 py-1 rounded-sm flex items-center justify-center text-xs font-medium text-[#818898] hover:bg-[#f0f1f2] cursor-pointer transition duration-150 ${sidebarExpanded ? 'justify-start' : 'justify-center'} ${pathname.includes('prices') ? 'bg-[#ffffff]' : ''}`} style={{ minHeight: '28px' }}>
                <NavLink end to="/prices" className={`flex items-center ${sidebarExpanded ? 'w-full' : 'justify-center w-auto'} `} style={{ textDecoration: 'none' }}>
                  <FaBitcoin className={`text-base ${sidebarExpanded ? 'mr-3' : ''}`} />
                  {sidebarExpanded && <span>{t('hotCommunity')}</span>}
                </NavLink>
              </li>
              {/* Wallet */}
              <li className={`px-2 py-1 rounded-sm flex items-center justify-center text-xs font-medium text-[#818898] hover:bg-[#f0f1f2] cursor-pointer transition duration-150 ${sidebarExpanded ? 'justify-start' : 'justify-center'} ${pathname.includes('wallet') ? 'bg-[#ffffff]' : ''}`} style={{ minHeight: '28px' }}>
                <NavLink end to="/wallet" className={`flex items-center ${sidebarExpanded ? 'w-full' : 'justify-center w-auto'} `} style={{ textDecoration: 'none' }}>
                  <FaWallet className={`text-base ${sidebarExpanded ? 'mr-3' : ''}`} />
                  {sidebarExpanded && <span>{t('hotDEX')}</span>}
                </NavLink>
              </li>
              {/* Setting */}
              <li className={`px-2 py-1 rounded-sm flex items-center justify-center text-xs font-medium text-[#818898] hover:bg-[#f0f1f2] cursor-pointer transition duration-150 ${sidebarExpanded ? 'justify-start' : 'justify-center'} ${pathname.includes('setting') ? 'bg-[#ffffff]' : ''}`} style={{ minHeight: '28px' }}>
                <NavLink end to="/setting" className={`flex items-center ${sidebarExpanded ? 'w-full' : 'justify-center w-auto'} `} style={{ textDecoration: 'none' }}>
                  <AiTwotoneSetting className={`text-base ${sidebarExpanded ? 'mr-3' : ''}`} />
                  {sidebarExpanded && <span>{t('joinCommunity')}</span>}
                </NavLink>
              </li>
              {sidebarExpanded && (
                <div className="text-xs font-medium my-2 text-[#818898] lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 pl-2">{t('other')}</div>
              )}
              <li className={`px-2 py-1 rounded-sm flex items-center justify-center text-xs font-medium text-[#818898] hover:bg-[#f0f1f2] cursor-pointer transition duration-150 ${sidebarExpanded ? 'justify-start' : 'justify-center'} ${pathname.includes('setting') ? 'bg-[#ffffff]' : ''}`} style={{ minHeight: '28px' }}>
                <NavLink end to="/setting" className={`flex items-center ${sidebarExpanded ? 'w-full' : 'justify-center w-auto'} `} style={{ textDecoration: 'none' }}>
                  <AiTwotoneSetting className={`text-base ${sidebarExpanded ? 'mr-3' : ''}`} />
                  {sidebarExpanded && <span>{t('adAirdrop')}</span>}
                </NavLink>
              </li>
              <li className={`px-2 py-1 rounded-sm flex items-center justify-center text-xs font-medium text-[#818898] hover:bg-[#f0f1f2] cursor-pointer transition duration-150 ${sidebarExpanded ? 'justify-start' : 'justify-center'} ${pathname.includes('setting') ? 'bg-[#ffffff]' : ''}`} style={{ minHeight: '28px' }}>
                <NavLink end to="/setting" className={`flex items-center ${sidebarExpanded ? 'w-full' : 'justify-center w-auto'} `} style={{ textDecoration: 'none' }}>
                  <AiTwotoneSetting className={`text-base ${sidebarExpanded ? 'mr-3' : ''}`} />
                  {sidebarExpanded && <span>{t('setting')}</span>}
                </NavLink>
              </li>
              <li className={`px-2 py-1 rounded-sm flex items-center justify-center text-xs font-medium text-[#818898] hover:bg-[#f0f1f2] cursor-pointer transition duration-150 ${sidebarExpanded ? 'justify-start' : 'justify-center'} ${pathname.includes('setting') ? 'bg-[#ffffff]' : ''}`} style={{ minHeight: '28px' }}>
                <NavLink end to="/setting" className={`flex items-center ${sidebarExpanded ? 'w-full' : 'justify-center w-auto'} `} style={{ textDecoration: 'none' }}>
                  <AiTwotoneSetting className={`text-base ${sidebarExpanded ? 'mr-3' : ''}`} />
                  {sidebarExpanded && <span>{t('getHelp')}</span>}
                </NavLink>
              </li>
            </ul>
          </div>
          {/* More group */}
        </div>
        {/* 我的社区和优秀共建者 */}
        <div className="mt-4">
          {/* 我的社区 */}
          <div>
            <div className={`text-xs font-medium mb-2 text-blue-600 ${sidebarExpanded ? '' : 'text-center'}`}>{sidebarExpanded ? t('myCommunity') : <span className="text-blue-600">☰</span>}</div>
            <ul className="space-y-0.5">
              {[
                { icon: '🧑‍🤝‍🧑', label: t('submitCommunity') },
                { icon: '📊', label: t('communityOverview') },
                { icon: '💰', label: t('goldProtocol') },
                { icon: '🌐', label: t('web3Selection') },
                { icon: '🧑‍💻', label: t('web3Pro') },
                { icon: '🏘️', label: t('buildingOwner') },
                { icon: '💸', label: t('billionWealth') },
              ].map((item) => (
                <li
                  key={item.label}
                  className={`px-2 py-1 rounded-sm flex items-center text-xs font-medium text-[#818898] hover:underline cursor-pointer transition duration-150 ${sidebarExpanded ? 'justify-start' : 'justify-center'} ${sidebarExpanded ? 'hover:bg-[#f0f1f2]' : ''}`}
                  style={{ minHeight: '28px' }}
                >
                  <span className="text-base mr-1">{item.icon}</span>
                  {sidebarExpanded && <span>{item.label}</span>}
                </li>
              ))}
            </ul>
          </div>
          {/* 优秀共建者 */}
          <div className={`mt-8 bg-white rounded-xl p-3 shadow ${sidebarExpanded ? '' : 'hidden'} hidden`}> {/* 只在展开时显示 */}
            <div className="text-xs font-semibold mb-2">{t('topBuilders')}</div>
            <ul>
              {[1,2,3].map(i => (
                <li key={i} className="flex items-center mb-2 last:mb-0">
                  <img src="/photo1.jpg" alt="avatar" className="w-7 h-7 rounded-full mr-2" />
                  <span className="flex-1 text-sm">数字少年</span>
                  <span className="text-xs text-gray-500 font-medium">+125000</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* 底部客服和用户卡片 */}
        
        <div className="mt-2 mb-1 px-1 flex flex-col flex-grow">
          <div className="flex items-center gap-3 mt-auto mb-1" style={{background: 'none', boxShadow: 'none', border: 'none', padding: 0}}>
            <img src="/siderbar/head.png" alt="avatar" className="w-10 h-10 rounded-full object-cover" />
            {(sidebarExpanded || !window.matchMedia('(min-width: 1024px)').matches) && (
              <>
                <div className="flex-1 min-w-0 flex flex-col justify-center h-full">
                  <div className="font-semibold text-[14px] text-black truncate">Max Verstappen</div>
                  <div className="text-[9px] text-gray-400 truncate">lewis@mail.com</div>
                </div>
                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <div className="bg-white p-2  rounded-full">  
  <svg 
    className="w-3 h-3 text-gray-600 transition-transform duration-200 rotate-180"
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    viewBox="0 0 24 24"
  >
    <path d="M15 19l-7-7 7-7" />
  </svg>
</div>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired
};

export default Sidebar;

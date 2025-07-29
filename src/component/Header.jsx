import { useState, useRef, useEffect } from 'react'
import SearchModal from './headerComponents/ModalSearch'
import Notifications from './headerComponents/DropdownNotifications'
import UserMenu from './headerComponents/DropdownProfile'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'
import PropTypes from 'prop-types'

const Header = ({ sidebarOpen, setSidebarOpen }) => {
    const [searchModalOpen, setSearchModalOpen] = useState(false)
    const [selectedTab, setSelectedTab] = useState(0)
    const [langDropdownOpen, setLangDropdownOpen] = useState(false)
    const [lang, setLang] = useState('zh') // zh or en
    const langRef = useRef(null)
    const { t } = useTranslation()

    useEffect(() => {
      function handleClickOutside(event) {
        if (langRef.current && !langRef.current.contains(event.target)) {
          setLangDropdownOpen(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      // 读取本地语言
      const storedLang = localStorage.getItem('lang')
      if (storedLang === 'zh' || storedLang === 'en') {
        setLang(storedLang)
      }
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <header>
            <div className="sticky w-[100] border-slate-200 z-30 h-14 ">
                <div className="px-4 sm:px-4 lg:px-4">
                    <div className="flex justify-between items-center h-12 -mb-px bg-white px-2 w-full rounded-3xl">
                        {/* 1Header => left hand side */}
                        <div className="flex align-items-center">
                            {/* hamburger button */}
                            <button
                                className="lg:hidden"
                                aria-controls='sidebar'
                                aria-expanded={sidebarOpen}
                                onClick={e => {
                                    e.stopPropagation()
                                    setSidebarOpen(!sidebarOpen)
                                }}>
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="4" y="5" width="16" height="2" />
                                    <rect x="4" y="11" width="16" height="2" />
                                    <rect x="4" y="17" width="16" height="2" />
                                </svg>
                            </button>
                            <div className="px-2 py-1 relative hidden md:flex items-center" style={{ backgroundColor: '#f8f9fa', color: '#000', borderRadius: '9999px', fontWeight: 'bold', fontSize: '1.1rem' }}>
                                Xtrade.MEME
                                <span className="ml-2 mt-3 mb-0 w-1 h-1 bg-blue-600 rounded-full inline-block align-middle"></span>
                            </div>
                        </div>
                        {/* 新增tab组件，和左侧内容并列 */}
                        <div className="hidden md:flex ml-4">
                            <div className="flex bg-[#f8f9fa] rounded-full px-1 py-1">
                                {[t('home'), t('community'), t('ad'), t('nft'), t('about')].map((tab, idx) => (
                                    <button
                                        key={tab}
                                        className={`px-8 py-1 rounded-full text-sm transition-colors duration-200 ${selectedTab === idx ? 'text-[#003df6]' : 'text-black'}`}
                                        style={{ fontWeight: 'normal' }}
                                        onClick={() => setSelectedTab(idx)}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Header => Right hand side */}
                        <div className="flex items-center space-x-3">
                            <div>
                                <button
                                    className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full ml-3
                                               ${searchModalOpen && 'bg-slate-200'} `}
                                    aria-controls='search-modal'
                                    onClick={e => {
                                        e.stopPropagation()
                                        setSearchModalOpen(true)
                                    }}>
                                    <span className="sr-only">Search</span>
                                    <svg className="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            className="fill-current text-slate-500 dark:text-slate-400"
                                            d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                                        />
                                        <path
                                            className="fill-current text-slate-400 dark:text-slate-500"
                                            d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                                        />
                                    </svg>
                                </button>

                                <SearchModal
                                    id="search-modal"
                                    searchId="search"
                                    modalOpen={searchModalOpen}
                                    setModalOpen={setSearchModalOpen} />
                            </div>
                            <Notifications align="right" />
                            {/* Language Switcher */}
                            <div ref={langRef} className="relative">
                              <button
                                className="flex items-center px-4 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full text-black text-sm transition whitespace-nowrap"
                                onClick={() => setLangDropdownOpen(v => !v)}
                              >
                                <svg className="w-5 h-5 mr-1.5" fill="none" stroke="#222" strokeWidth="1.5" viewBox="0 0 24 24">
                                  <circle cx="12" cy="12" r="10" stroke="#222" strokeWidth="1.5" fill="none"/>
                                  <path d="M2 12h20M12 2c2.5 3.5 2.5 16.5 0 20M12 2c-2.5 3.5-2.5 16.5 0 20" stroke="#222" strokeWidth="1.5" fill="none"/>
                                </svg>
                                <span>{t('languageSwitch')}</span>
                              </button>
                              {langDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-28 bg-white rounded-xl shadow-lg border border-slate-100 z-50">
                                  <button
                                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-slate-100 rounded-t-xl ${lang === 'zh' ? 'text-blue-600' : 'text-gray-800'}`}
                                    onClick={() => { setLang('zh'); setLangDropdownOpen(false); localStorage.setItem('lang', 'zh'); i18n.changeLanguage('zh'); }}
                                  >中文</button>
                                  <button
                                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-slate-100 rounded-b-xl ${lang === 'en' ? 'text-blue-600' : 'text-gray-800'}`}
                                    onClick={() => { setLang('en'); setLangDropdownOpen(false); localStorage.setItem('lang', 'en'); i18n.changeLanguage('en'); }}
                                  >English</button>
                                </div>
                              )}
                            </div>

                           
                            {/* <ThemeToggle /> */}

                            {/* Divider between Profile and ThemeToggle */}
                            
                            <UserMenu align="right" />

                          
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
  sidebarOpen: PropTypes.bool,
  setSidebarOpen: PropTypes.func,
}

export default Header

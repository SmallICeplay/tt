import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            welcome: 'Welcome',
            languageSwitch: 'Language',
            home: 'Home',
            community: 'Community',
            ad: 'Ad',
            nft: 'NFT',
            about: 'About Us',
            topNews: 'Top News',
            airdrop: 'Today\'s Airdrop',
            "24HSmartCommunity": "24H Smartest Community",
            "24HActiveCommunity": "24H Most Active Community",
            "24HDealCommunity": "24H Top Deal Community",
            communityNFT: 'Community NFT',
            hotCommunity: 'Hot Community',
            hotDEX: 'Hot DEX',
            joinCommunity: 'Join/Settle Community',
            adAirdrop: 'Ad & Airdrop',
            setting: 'Setting',
            getHelp: 'Get Help',
            myCommunity: 'My Community',
            submitCommunity: 'Submit Community',
            communityOverview: 'Community Overview',
            goldProtocol: 'Gold Protocol',
            web3Selection: 'Web3.0 Selection',
            web3Pro: 'Web3.0 Pro',
            buildingOwner: 'Building 107 Owner',
            billionWealth: 'Billion Wealth Community',
            topBuilders: 'Top Builders',
            // ... add more keys as needed
        }
    },
    zh: {
        translation: {
            welcome: '欢迎',
            languageSwitch: '语言切换',
            home: '首页',
            community: '社区入驻',
            ad: '广告投放',
            nft: '社区NFT',
            about: '关于我们',
            topNews: '头条新闻',
            airdrop: '今日优质空投',
            "24HSmartCommunity": "24H最聪明社区",
            "24HActiveCommunity": "24H最活跃社区",
            "24HDealCommunity": "24H成交最高社区",
            communityNFT: '社区NFT',
            hotCommunity: '热门社区',
            hotDEX: '热门DEX',
            joinCommunity: '社区入驻/加入社区',
            adAirdrop: '广告和空投投放',
            setting: '设置',
            getHelp: '帮助',
            myCommunity: '我的社区',
            submitCommunity: '提交社区',
            communityOverview: '社区数据总览',
            goldProtocol: '黄金协议票富',
            web3Selection: '第三节Web3.0精选',
            web3Pro: '墨谷Web3.0 Pro',
            buildingOwner: '107栋小区业主',
            billionWealth: '亿万财富社区',
            topBuilders: '优秀共建者',
            // ... add more keys as needed
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('lang') || 'zh',
        fallbackLng: 'zh',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
/**
 * API配置文件
 * 用于统一管理所有接口地址，支持开发环境和生产环境的切换
 */

// 环境变量配置
const isDevelopment = import.meta.env.MODE === 'development';
const isProduction = import.meta.env.MODE === 'production';

// API基础地址配置
export const API_CONFIG = {
  // 主要API服务地址
  BASE_URL: {
    development: 'http://localhost:3000/api', // 本地开发地址
    production: 'http://43.254.167.238:3000/api', // 生产环境地址
  },
  
  // CoinGecko API地址（第三方服务）
  COINGECKO_URL: 'https://api.coingecko.com/api/v3',
  
  // API密钥配置
  API_KEYS: {
    X_API_KEY: 'LYpiKR9BezV5NdPM493M49EQLjdOLVZVdtVkx7wFpR2jlTgSlbMpAZ5tL0saCKN2'
  },
  
  // 请求超时配置
  TIMEOUT: 100000,
};

/**
 * 获取当前环境的API基础地址
 * @returns {string} 当前环境对应的API地址
 */
export const getBaseURL = () => {
  if (isDevelopment) {
    return API_CONFIG.BASE_URL.development;
  }
  return API_CONFIG.BASE_URL.production;
};

/**
 * 获取完整的API端点地址
 * @param {string} endpoint - API端点路径
 * @returns {string} 完整的API地址
 */
export const getApiUrl = (endpoint) => {
  const baseUrl = getBaseURL();
  return `${baseUrl}${endpoint.startsWith('/') ? endpoint : '/' + endpoint}`;
};

/**
 * API端点常量
 */
export const API_ENDPOINTS = {
  // 加密货币相关接口
  WX_CA: '/wx-ca',
  
  // 其他接口可以在这里添加
  // USER: '/user',
  // AUTH: '/auth',
};

/**
 * 环境信息
 */
export const ENV_INFO = {
  isDevelopment,
  isProduction,
  mode: import.meta.env.MODE,
};

export default API_CONFIG;
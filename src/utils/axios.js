import axios from 'axios';
import { API_CONFIG, getBaseURL, ENV_INFO } from '../config/api.js';

/**
 * 创建axios实例
 * 支持开发环境和生产环境的自动切换
 */
const instance = axios.create({
    // 使用配置文件中的基础URL（在开发��境下会被vite代理拦截）
    baseURL: ENV_INFO.isDevelopment ? '' : getBaseURL(),
    timeout: API_CONFIG.TIMEOUT,
    headers: {
        'Content-Type': 'application/json',
    },
});

/**
 * 请求拦截器
 * 1. 为特定接口添加API密钥
 * 2. 在开发环境下添加调试信息
 */
instance.interceptors.request.use(config => {
    // 为/api-ave开头的请求加X-API-KEY
    if (config.url && config.url.startsWith('/api-ave')) {
        config.headers['X-API-KEY'] = API_CONFIG.API_KEYS.X_API_KEY;
    }
    
    // 开发环境下打印请求信息
    if (ENV_INFO.isDevelopment) {
        console.log('🚀 API请求:', {
            method: config.method?.toUpperCase(),
            url: config.url,
            baseURL: config.baseURL,
            fullURL: `${config.baseURL || ''}${config.url}`
        });
    }
    
    return config;
}, error => {
    console.error('❌ 请求拦截器错误:', error);
    return Promise.reject(error);
});

/**
 * 响应拦截器
 * 统一处理响应和错误
 */
instance.interceptors.response.use(
    response => {
        // 开发环境下打印响应信息
        if (ENV_INFO.isDevelopment) {
            console.log('✅ API响应:', {
                status: response.status,
                url: response.config.url,
                data: response.data
            });
        }
        return response;
    },
    error => {
        // 统一错误处理
        const errorInfo = {
            message: error.message,
            status: error.response?.status,
            url: error.config?.url,
            data: error.response?.data
        };

        console.error('❌ API请求失败:', errorInfo);

        // 在开发环境下提供更详细的错误信息
        if (ENV_INFO.isDevelopment) {
            console.error('详细错误信息:', {
                config: error.config,
                response: error.response,
                request: error.request
            });
        }

        // 可以在这里添加全局错误处理逻辑
        // 例如：token过期跳转登录页面等

        return Promise.reject(error);
    }
);

export default instance;

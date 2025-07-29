import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    // 加载环境变量
    const env = loadEnv(mode, process.cwd(), '')
    
    // 根据环境变量或模式确定代理目标
    const getProxyTarget = () => {
        // 优先使用环境变量中的API地址
        if (env.VITE_API_BASE_URL) {
            return env.VITE_API_BASE_URL
        }
        
        // 根据模式返回默认地址
        if (mode === 'development') {
            return 'http://localhost:3000/api' // 本地开发地址
        }
        
        return 'http://43.254.167.238:3000/api' // 生产环境地址
    }
    
    return {
        plugins: [react()],
        server: {
            proxy: {
                // 代理API接口
                '/api': {
                    target: getProxyTarget(),
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/api/, ''),
                    // 开发环境下显示代理日志
                    configure: (proxy, options) => {
                        if (mode === 'development') {
                            console.log(`🔗 API代理目标: ${options.target}`)
                        }
                    }
                }
            },
        },
        // 定义全局常量，可在代码中使用
        define: {
            __API_BASE_URL__: JSON.stringify(getProxyTarget()),
            __DEV_MODE__: mode === 'development'
        }
    }
})
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_CONFIG } from '../../config/api.js'

/**
 * CoinGecko API服务
 * 用于获取加密货币市场数据
 */
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: API_CONFIG.COINGECKO_URL,
        // 可以在这里添加通用的请求头或其他配置
        prepareHeaders: (headers, { getState }) => {
            // 如果需要，可以在这里添加认证头或其他通用头部
            headers.set('Accept', 'application/json')
            return headers
        },
    }),
    tagTypes: ["crypto"], // for auto-refetching
    endpoints : (builder) => ({
        /**
         * 获取加密货币市场数据
         * @param {Object} params - 查询参数
         * @param {string} params.vs_currency - 对比货币，默认usd
         * @param {string} params.order - 排序方式，默认按市值降序
         * @param {number} params.per_page - 每页数量，默认100
         * @param {number} params.page - 页码，默认1
         */
        getCoinsMarket: builder.query({
            query: (params = {}) => {
                const defaultParams = {
                    vs_currency: 'usd',
                    order: 'market_cap_desc',
                    per_page: 100,
                    page: 1,
                    sparkline: false,
                    price_change_percentage: '1h,24h',
                    locale: 'en'
                }
                
                const queryParams = { ...defaultParams, ...params }
                const searchParams = new URLSearchParams(queryParams)
                
                return {
                    url: `/coins/markets?${searchParams.toString()}`,
                }
            },
            providesTags: ['crypto'],
            // 缓存时间设置（5分钟）
            keepUnusedDataFor: 300,
        })
    })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCoinsMarketQuery } = cryptoApi
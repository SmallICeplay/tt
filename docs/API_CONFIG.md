# API配置说明文档

本文档说明如何在项目中配置和切换API接口地址。

## 📁 配置文件结构

```
├── .env.development      # 开发环境配置
├── .env.production       # 生产环境配置
├── .env.example          # 配置示例文件
├── src/
│   ├── config/
│   │   └── api.js        # API配置中心
│   ├── utils/
│   │   └── axios.js      # Axios实例配置
│   └── redux/
│       └── api/
│           └── cryptoApi.js  # RTK Query配置
└── vite.config.js        # Vite代理配置
```

## 🔧 如何切换接口地址

### 方法1：使用环境变量（推荐）

1. **创建本地环境配置文件**
   ```bash
   # 复制示例文件
   cp .env.example .env.local
   ```

2. **编辑 `.env.local` 文件**
   ```env
   # 本地开发服务器
   VITE_API_BASE_URL=http://localhost:3000/api
   
   # 或者远程开发服务器
   # VITE_API_BASE_URL=http://43.254.167.238:3000/api
   
   # 或者局域网地址
   # VITE_API_BASE_URL=http://192.168.1.100:3000/api
   ```

3. **重启开发服务器**
   ```bash
   npm run dev
   # 或
   yarn dev
   ```

### 方法2：修改配置文件

直接编辑 `src/config/api.js` 文件中的地址配置：

```javascript
export const API_CONFIG = {
  BASE_URL: {
    development: 'http://localhost:3000/api',     // 修改这里
    production: 'http://43.254.167.238:3000/api', // 或这里
  },
  // ...
};
```

### 方法3：修改Vite配置

编辑 `vite.config.js` 文件，直接修改代理目标：

```javascript
// 在 getProxyTarget 函数中修改默认地址
if (mode === 'development') {
    return 'http://localhost:3000/api' // 修改这里
}
```

## 🌍 环境说明

### 开发环境 (development)
- 默认使用 `http://localhost:3000/api`
- 启用API调试日志
- 通过Vite代理转发请求

### 生产环境 (production)
- 默认使用 `http://43.254.167.238:3000/api`
- 关闭调试日志
- 直接请求API服务器

## 🔍 调试功能

在开发环境下，系统会自动打印API请求和响应信息：

```
🚀 API请求: { method: 'GET', url: '/api/wx-ca', ... }
✅ API响应: { status: 200, data: {...} }
```

如需关闭调试日志，设置环境变量：
```env
VITE_API_DEBUG=false
```

## 📝 常用API地址

| 环境 | 地址 | 说明 |
|------|------|------|
| 本地开发 | `http://localhost:3000/api` | 本地后端服务 |
| 远程开发 | `http://43.254.167.238:3000/api` | 远程开发服务器 |
| 生产环境 | `http://43.254.167.238:3000/api` | 生产服务器 |

## ⚠️ 注意事项

1. **环境变量优先级**：`.env.local` > `.env.development` > 默认配置
2. **文件安全**：不要将包含敏感信息的 `.env.local` 文件提交到版本控制
3. **重启服务**：修改环境变量后需要重启开发服务器
4. **CORS问题**：确保API服务器配置了正确的CORS策略

## 🚀 快速开始

1. 启动本地后端服务（如果有）
2. 复制并配置环境变量文件
3. 启动前端开发服务器
4. 检查控制台日志确认API地址

```bash
# 1. 配置环境变量
cp .env.example .env.local
# 编辑 .env.local 文件

# 2. 启动开发服务器
npm run dev

# 3. 查看控制台输出
# 🔗 API代理目标: http://localhost:3000/api
```

## 🔧 故障排除

### 问题1：API请求失败
- 检查API服务器是否启动
- 确认API地址配置正确
- 查看浏览器网络面板

### 问题2：代理不生效
- 重启开发服务器
- 检查vite.config.js配置
- 确认环境变量格式正确

### 问题3：CORS错误
- 配置API服务器CORS策略
- 或使用代理模式（开发环境）
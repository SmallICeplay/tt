# Crypto Dashboard

一个现代化的加密货币仪表板应用，基于React + Vite构建。

## ✨ 功能特性

- 📊 实时加密货币价格监控
- 💰 钱包管理功能
- 👥 用户管理系统
- ⚙️ 个性化设置
- 🌍 多语言支持（中文/英文）
- 📱 响应式设计

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0 或 yarn >= 1.22.0

### 安装依赖

```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install
```

### 配置API地址

项目支持灵活的API地址配置，可以轻松切换本地开发和远程服务器：

1. **复制环境配置文件**
   ```bash
   cp .env.example .env.local
   ```

2. **编辑 `.env.local` 文件**
   ```env
   # 本地开发服务器
   VITE_API_BASE_URL=http://localhost:3000/api
   
   # 或者使用远程服务器
   # VITE_API_BASE_URL=http://43.254.167.238:3000/api
   ```

3. **查看详细配置说明**
   ```bash
   # 查看完整的API配置文档
   cat docs/API_CONFIG.md
   ```

### 启动开发服务器

```bash
# 使用 npm
npm run dev

# 或使用 yarn
yarn dev
```

应用将在 `http://localhost:5173` 启动

### 构建生产版本

```bash
# 使用 npm
npm run build

# 或使用 yarn
yarn build
```

## 📁 项目结构

```
src/
├── component/              # React组件
│   ├── Dashboard.jsx       # 仪表板主页
│   ├── BitcoinPrices.jsx   # 价格监控
│   ├── MyWallet.jsx        # 钱包管理
│   ├── Members.jsx         # 用户管理
│   └── MySetting.jsx       # 设置页面
├── config/                 # 配置文件
│   └── api.js             # API配置中心
├── data/                   # 静态数据
├── redux/                  # Redux状态管理
│   ├── api/               # RTK Query API
│   └── store.js           # Store配置
├── routes/                 # 路由配置
├── utils/                  # 工具函数
│   └── axios.js           # HTTP客户端
└── i18n.js                # 国际化配置
```

## 🔧 API配置说明

### 支持的配置方式

1. **环境变量配置（推荐）**
   - `.env.local` - 本地开发配置
   - `.env.development` - 开发环境默认配置
   - `.env.production` - 生产环境配置

2. **配置文件修改**
   - `src/config/api.js` - 统一API配置
   - `vite.config.js` - Vite代理配置

### 常用API地址

| 环境 | 地址 | 用途 |
|------|------|------|
| 本地开发 | `http://localhost:3000/api` | 本地后端服务 |
| 远程开发 | `http://43.254.167.238:3000/api` | 远程开发服务器 |
| 生产环境 | `http://43.254.167.238:3000/api` | 生产服务器 |

### 调试功能

开发环境下会自动显示API请求日志：
```
🔗 API代理目标: http://localhost:3000/api
🚀 API请求: { method: 'GET', url: '/api/wx-ca' }
✅ API响应: { status: 200, data: {...} }
```

## 🌍 多语言支持

项目支持中文和英文两种语言：

- 语言文件：`src/i18n.js`
- 切换方式：通过设置页面或localStorage
- 默认语言：中文

## 🛠️ 技术栈

- **前端框架**：React 18
- **构建工具**：Vite
- **状态管理**：Redux Toolkit + RTK Query
- **路由**：React Router DOM
- **样式**：Tailwind CSS
- **HTTP客户端**：Axios
- **图表库**：Chart.js
- **UI组件**：Mantine + Flowbite
- **国际化**：react-i18next

## 📝 开发指南

### 添加新的API接口

1. 在 `src/config/api.js` 中添加端点常量
2. 在对应的API文件中添加接口定义
3. 在组件中使用生成的hooks

### 添加新的页面

1. 在 `src/component/` 中创建组件
2. 在 `src/routes/Path.jsx` 中添加路由
3. 在侧边栏中添加导航链接

### 代码规范

- 使用ES6+语法
- 组件使用函数式组件 + Hooks
- 遵循React最佳实践
- 添加适当的注释和文档

## 🔍 故障排除

### API请求失败
1. 检查API服务器状态
2. 确认API地址配置
3. 查看浏览器控制台错误
4. 检查网络连接

### 开发服务器启动失败
1. 检查Node.js版本
2. 清除node_modules重新安装
3. 检查端口占用情况

### 构建失败
1. 检查代码语法错误
2. 确认所有依赖已安装
3. 查看构建日志详细信息

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 📞 联系方式

如有问题，请通过以下方式联系：
- 提交GitHub Issue
- 发送邮件至项目维护者

---

**注意**：首次运行项目前，请确保已正确配置API地址。详细配置说明请参考 `docs/API_CONFIG.md` 文件。
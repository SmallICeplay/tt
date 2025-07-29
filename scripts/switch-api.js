#!/usr/bin/env node

/**
 * API地址快速切换工具
 * 使用方法：
 *   node scripts/switch-api.js local    # 切换到本地地址
 *   node scripts/switch-api.js remote   # 切换到远程地址
 *   node scripts/switch-api.js custom <url>  # 切换到自定义地址
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 预定义的API地址
const API_ADDRESSES = {
  local: 'http://localhost:3000/api',
  remote: 'http://43.254.167.238:3000/api',
  dev: 'http://192.168.1.100:3000/api', // 示例局域网地址
};

// 环境配置文件路径
const ENV_FILE_PATH = path.join(process.cwd(), '.env.local');

/**
 * 读取现有的环境配置
 */
function readEnvFile() {
  try {
    if (fs.existsSync(ENV_FILE_PATH)) {
      return fs.readFileSync(ENV_FILE_PATH, 'utf8');
    }
    return '';
  } catch (error) {
    console.error('❌ 读取环境配置文件失败:', error.message);
    return '';
  }
}

/**
 * 更新环境配置文件
 */
function updateEnvFile(apiUrl) {
  try {
    let envContent = readEnvFile();
    
    // 如果文件为空，创建基础配置
    if (!envContent.trim()) {
      envContent = `# 本地环境配置文件\n# 由API切换工具自动生成\n\n`;
    }
    
    // 更新或添加API地址配置
    const apiUrlPattern = /^VITE_API_BASE_URL=.*$/m;
    const newApiLine = `VITE_API_BASE_URL=${apiUrl}`;
    
    if (apiUrlPattern.test(envContent)) {
      // 更新现有配置
      envContent = envContent.replace(apiUrlPattern, newApiLine);
    } else {
      // 添加新配置
      envContent += `\n${newApiLine}\n`;
    }
    
    // 确保有调试配置
    if (!envContent.includes('VITE_API_DEBUG')) {
      envContent += 'VITE_API_DEBUG=true\n';
    }
    
    // 写入文件
    fs.writeFileSync(ENV_FILE_PATH, envContent);
    
    console.log('✅ API地址已更新');
    console.log(`📍 当前地址: ${apiUrl}`);
    console.log('🔄 请重启开发服务器以应用更改');
    
  } catch (error) {
    console.error('❌ 更新环境配置文件失败:', error.message);
    process.exit(1);
  }
}

/**
 * 显示帮助信息
 */
function showHelp() {
  console.log(`
🔧 API地址切换工具

使用方法:
  node scripts/switch-api.js <选项> [自定义地址]

选项:
  local     切换到本地地址 (${API_ADDRESSES.local})
  remote    切换到远程地址 (${API_ADDRESSES.remote})
  dev       切换到开发地址 (${API_ADDRESSES.dev})
  custom    切换到自定义地址 (需要提供URL参数)
  status    显示当前配置状态
  help      显示此帮助信息

示例:
  node scripts/switch-api.js local
  node scripts/switch-api.js custom http://192.168.1.50:3000/api
  node scripts/switch-api.js status
`);
}

/**
 * 显示当前状态
 */
function showStatus() {
  const envContent = readEnvFile();
  const match = envContent.match(/^VITE_API_BASE_URL=(.*)$/m);
  
  console.log('\n📊 当前API配置状态:');
  
  if (match) {
    const currentUrl = match[1];
    console.log(`📍 当前地址: ${currentUrl}`);
    
    // 检查是否匹配预定义地址
    const matchedKey = Object.keys(API_ADDRESSES).find(
      key => API_ADDRESSES[key] === currentUrl
    );
    
    if (matchedKey) {
      console.log(`🏷️  地址类型: ${matchedKey}`);
    } else {
      console.log('🏷️  地址类型: 自定义');
    }
  } else {
    console.log('❌ 未找到API地址配置');
    console.log('💡 使用 "node scripts/switch-api.js local" 设置默认地址');
  }
  
  console.log(`📁 配置文件: ${ENV_FILE_PATH}`);
  console.log(`📄 文件存在: ${fs.existsSync(ENV_FILE_PATH) ? '是' : '否'}`);
}

/**
 * 验证URL格式
 */
function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

/**
 * 主函数
 */
function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args[0] === 'help') {
    showHelp();
    return;
  }
  
  const command = args[0].toLowerCase();
  
  switch (command) {
    case 'status':
      showStatus();
      break;
      
    case 'local':
    case 'remote':
    case 'dev':
      updateEnvFile(API_ADDRESSES[command]);
      break;
      
    case 'custom':
      if (args.length < 2) {
        console.error('❌ 自定义地址模式需要提供URL参数');
        console.log('💡 示例: node scripts/switch-api.js custom http://localhost:8080/api');
        process.exit(1);
      }
      
      const customUrl = args[1];
      if (!isValidUrl(customUrl)) {
        console.error('❌ 提供的URL格式无效');
        console.log('💡 请确保URL包含协议 (http:// 或 https://)');
        process.exit(1);
      }
      
      updateEnvFile(customUrl);
      break;
      
    default:
      console.error(`❌ 未知命令: ${command}`);
      showHelp();
      process.exit(1);
  }
}

// 运行主函数
main();
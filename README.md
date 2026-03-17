# AISGOLD Landing Page

一个面向 Vercel 部署的静态单页官网，围绕“资产持续产出引擎”叙事构建，包含完整转化页面结构和一个前端版 AI 顾问 Demo。

## 当前结构

- `index.html`: 主页面
- `styles.css`: 样式文件
- `script.js`: 页面交互与 AI 顾问 Demo
- `vercel.json`: Vercel 部署和响应头配置

## 本地预览

如果你只想本地打开，直接双击 `index.html` 即可。

如果你想用本地服务器预览，可以运行：

```bash
python3 -m http.server 4173
```

然后访问 `http://localhost:4173`

## Vercel 部署

1. 登录 Vercel
2. Import Git Repository
3. 选择 `ronfatt/sgold`
4. Framework Preset 选择 `Other`
5. 保持默认输出设置并直接部署

这个仓库是纯静态站，不需要构建命令也能直接上线。

## 下一步升级建议

### 1. 接入真实 AI 顾问

推荐升级到 `Next.js`，然后在服务端 API 中调用 OpenAI：

- 新手问题解释
- 个性化参与路径推荐
- FAQ 智能问答
- 节点顾问助手

### 2. 什么时候接 Supabase

如果你要做这些功能，再接 Supabase：

- 登录 / 注册
- 顾问聊天记录
- 节点申请表
- 用户资料和权限
- FAQ / 内容后台

### 3. 什么时候只用 Vercel 就够了

如果当前阶段目标只是：

- 上线官网
- 展示系统结构
- 演示 AI 顾问概念

那么 `Git + Vercel` 就足够。

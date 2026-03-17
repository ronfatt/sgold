# S-Gold Landing Page

一个使用 `Next.js + Tailwind CSS + Framer Motion + lucide-react` 构建的高端深色系机构风落地页，面向数字资产基础设施项目展示。

## 技术栈

- Next.js App Router
- React
- Tailwind CSS
- Framer Motion
- lucide-react

## 本地开发

```bash
npm install
npm run dev
```

默认访问 `http://localhost:3000`

## 页面模块

- Sticky Header
- Hero
- What is S-Gold
- Why Now
- System Architecture
- Core Logic
- Revenue Model
- Fission / Growth Model
- Node System
- Ecosystem
- Roadmap
- FAQ
- CTA Footer

## 内容编辑

主要内容数据位于：

- `lib/site-data.ts`

页面结构和组件位于：

- `app/page.tsx`
- `components/*`

## Vercel 部署

1. 登录 Vercel
2. Import Git Repository
3. 选择 `ronfatt/sgold`
4. Vercel 会自动识别为 Next.js 项目
5. 直接部署

## 后续建议

- 接入真实 OpenAI 顾问层
- 增加中英文内容切换
- 把生态 logo 和图表替换成真实品牌与数据
- 接入 Supabase 做线索收集、FAQ 后台和节点申请

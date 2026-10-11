# LARS / IN TRANSIT — 城市日记与中国旅行地图

> 飞行意味着自由与可能性。停留、离开，尾翼在不同城市留下痕迹，继而振翅到达向往的「远方」。

这是 **LARS / IN TRANSIT** 完整静态网站项目包。所有资源均采用相对路径组织，结构清晰，100%保留所有视觉样式、交互动效与地图逻辑，支持开箱即用。

---

## 📁 完整目录结构清单

```
LARS-IN-TRANSIT/
├── index.html            # 主入口文件（包含首页与交互式地图完整页面结构）
├── style.css             # 样式文件（排版美学、动效、日记面板、光标跟随时效）
├── script.js             # 核心逻辑（SVG地图渲染、城市点亮、记忆库、照片上传与本地存储）
├── images/
│   └── china-map.svg     # 中国省份地图原始高精矢量底图（SVG）
├── data/
│   └── city-data.json    # 城市点位与精选地点独立数据档案（45座城市坐标及精选地点）
├── vercel.json           # Vercel 静态托管即开即用规则
├── package.json          # 本地运行辅助脚本
└── README.md             # 部署与使用完整说明文档
```

---

## 🚀 部署与使用方式

本网站为纯静态结构，所有 HTML、CSS、JS、SVG、JSON 路径完全匹配且均为相对路径：

### 1. 本地浏览器直接打开（Local Browser）
- **方式一（极速直接双击）**：
  双击直接用现代浏览器（Chrome / Edge / Safari / Firefox）打开 `index.html` 即可畅览全部页面、动画与地图。
- **方式二（本地静态服务，推荐）**：
  若想在本地以 HTTP 服务器模式运行：
  - **Python (内置)**：
    ```bash
    cd LARS-IN-TRANSIT
    python3 -m http.server 8000
    ```
    在浏览器访问 `http://localhost:8000`。
  - **Node.js**：
    ```bash
    cd LARS-IN-TRANSIT
    npx serve .
    ```
  - **VS Code**：安装 Live Server 插件，右键 `index.html` 点击 "Open with Live Server"。

---

### 2. GitHub Pages 一键部署
1. 登录 GitHub，创建一个新的公开或私有仓库（例如 `lars-travel-map`）。
2. 将本包解压后的所有文件（包含 `index.html`, `style.css`, `script.js`, `images/`, `data/`）上传或推送至仓库根目录。
3. 打开仓库的 **Settings** -> 左侧菜单 **Pages**。
4. 在 **Build and deployment** 下：
   - **Source**: 选择 `Deploy from a branch`
   - **Branch**: 选择 `main`（或 `master`），目录选择 `/ (root)`
5. 点击 **Save**。等待 1-2 分钟，GitHub Pages 将生成专属在线访问链接（例如：`https://<你的用户名>.github.io/lars-travel-map/`）。

---

### 3. Netlify 拖拽部署（最快，免命令行）
1. 打开 [Netlify 官网](https://app.netlify.com/) 并登录。
2. 进入控制台 **Sites** 页面。
3. 将解压后的 `LARS-IN-TRANSIT` 整个文件夹直接拖入网页底部的拖拽区域（"Drag and drop your site folder here"）。
4. 几秒内自动部署完成，Netlify 将提供全球 CDN 加速的免费 HTTPS 独立域名。

---

### 4. Vercel 部署
- **方式一（Git 关联）**：
  在 Vercel 中导入 GitHub 仓库，Framework Preset 选择 **Other**，Root Directory 保持根目录，点击 **Deploy** 即可。
- **方式二（CLI 命令行）**：
  ```bash
  cd LARS-IN-TRANSIT
  npx vercel
  ```
  项目内已预置 `vercel.json` 静态路由配置文件。

---

## 🧭 架构与数据说明

1. **地图系统**：
   - 使用 D3.js（v7）与 Canvas 高性能混合渲染，自动读取 `images/china-map.svg`。
   - 包含平移、滚动缩放（SCROLL TO ZOOM / DRAG TO MOVE）及双击城市智能对齐聚焦。
   - 省份根据是否有旅行足迹自动进行明暗着色分层（点亮包含足迹的省份，淡化未涉足省份）。

2. **城市档案与记忆库**：
   - **板块 01 飞行日志**：支持自由编写城市游记、心得，支持添加与预览多张本地照片。
   - **板块 02 城市记忆**：预置 12 座核心城市（上海、成都、北京、杭州、常州、西安、天津、太原、西双版纳、绍兴、喀什、厦门）的漫游地点档案与专属秘密笔记。
   - **本地存储持久化**：所有由用户新增的日记、地点与上传照片均安全保存在浏览器本地的 `localStorage` 中，页面刷新、关闭浏览器均不丢失。

3. **矢量资产**：
   - `images/china-map.svg` 为标准化中国矢量底图。

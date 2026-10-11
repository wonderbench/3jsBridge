# 3jsBridge
基于ThreeJS的桥梁仿真交互程序

## 当前状态

教学与认知方向的最小可运行基础工程，采用 React、TypeScript、Vite、Three.js、React Three Fiber 和 drei。

- 一个三步骤示例课程，以方块几何体表示桥面和桥墩
- 构件点选、按钮选择、讲解联动、步骤高亮和重置
- 独立于渲染的课程/构件类型，以及内容引用校验
- WebGL 不可用时保留文字课程和构件按钮
- 测试、类型检查、代码检查、构建命令及基础 CI

这是教学示意小样，不是完整课程，也不是结构分析软件。尺寸与构造均为简化示意，不用于工程设计、计算或安全判断。

## 本地运行

需要 Node.js 22.12+，推荐 Node.js 24（见 `.nvmrc`）。使用 npm 与已提交的锁文件。

```bash
npm ci
npm run dev
```

打开终端显示的本地地址。生产构建与预览：

```bash
npm run build
npm run preview
```

## 质量检查

```bash
npm run check
```

该命令依次运行 ESLint、TypeScript、Vitest 与生产构建。也可单独运行 `npm run lint`、`npm run typecheck`、`npm test`。DOM 测试替换了 WebGL 查看器，只验证课程与构件交互，不代替真实浏览器的三维验证。

Three.js 初始打包体积仍较大，当前构建会提示 chunk 超过 500 kB；性能预算与资源拆分留待真实内容接入后验证。不要把构建通过视为性能或设备兼容性达标。

## 目录

```text
src/
  app/                       页面装配、应用状态、样式与交互测试
  domain/                    课程/构件数据契约及引用校验
  demo/                      明确标记为示意的课程数据
  features/
    course-player/           课程说明与步骤导航
    bridge-viewer/           场景、拾取、高亮、相机与降级提示
  main.tsx                   应用入口
  test-setup.ts              DOM 测试环境
.github/workflows/ci.yml      npm ci + npm run check
```

只建立当前需要的目录。未来内容仓库、真实 GLB 资产、适配器、演示时间轴与测验模块，应在明确教学目标后逐步添加；不预先堆放空目录。

- [技术方案](docs/TECHNICAL_PLAN.md)：教学架构、开发约束与项目管理建议
- [开发说明](docs/DEVELOPMENT.md)：当前约定与人工验收步骤

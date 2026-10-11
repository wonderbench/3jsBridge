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

以下为已建立的规划目录与关键入口文件（省略根目录构建配置、锁文件等）。

```text
3jsBridge/
├─ src/
│  ├─ app/                # 已有：页面装配、状态、样式与交互测试
│  ├─ domain/             # 已有：课程/构件契约、引用校验与测试
│  ├─ application/        # 预留：用例、状态协调、端口
│  ├─ features/
│  │  ├─ course-player/   # 已有：课程导航、步骤与讲解
│  │  ├─ bridge-viewer/   # 已有：三维场景、拾取、高亮与相机
│  │  ├─ component-tree/  # 预留：构件查找与层级
│  │  └─ knowledge-check/ # 预留：理解检查与解释反馈
│  ├─ viewer/             # 预留：独立三维运行时与资源管理
│  ├─ demo/               # 已有：示意课程；时间轴/拆解尚未实现
│  ├─ adapters/           # 预留：内容与资产加载、可选本地保存
│  ├─ shared/             # 预留：小型通用 UI 与工具
│  ├─ main.tsx            # 应用入口
│  └─ test-setup.ts       # DOM 测试环境
├─ content/               # 预留：课程配置、讲解、来源与审校
├─ public/
│  └─ assets/             # 预留：可公开的小型样例与发布资产
├─ tests/                 # 预留：跨模块测试；现有测试仍就近放在 src
│  ├─ content/            # 内容契约与引用校验
│  ├─ unit/               # 纯逻辑
│  ├─ integration/        # 加载、取消与模块协作
│  ├─ e2e/                # 真实浏览器流程
│  ├─ performance/        # 视觉基线与性能验证
│  └─ fixtures/           # 正常、异常与基准夹具
├─ scripts/               # 预留：资产转换与内容校验
├─ docs/
│  ├─ TECHNICAL_PLAN.md   # 技术方案与项目管理规范
│  ├─ DEVELOPMENT.md      # 当前约定与人工验收
│  └─ adr/                # 预留：架构决策记录
├─ .github/
│  ├─ ISSUE_TEMPLATE/     # 任务模板
│  ├─ pull_request_template.md
│  └─ workflows/ci.yml    # 已有：npm ci + npm run check
└─ CONTRIBUTING.md        # 贡献与评审约定
```

按规划预先建立完整目录结构，并用简短 README 说明职责、依赖边界和后续文件示例，使 Git 能保留尚无代码的目录。标为“预留”的模块与测试套件尚未实现；现有代码保持不动，后续按教学目标逐步填充。只有出现独立复用或发布需求时再拆 packages。

- [技术方案](docs/TECHNICAL_PLAN.md)：教学架构、开发约束与项目管理建议
- [开发说明](docs/DEVELOPMENT.md)：当前约定与人工验收步骤
- [贡献指南](CONTRIBUTING.md)：Issue、PR、分层约束与验证要求
- [架构决策记录](docs/adr/README.md)：关键选型和契约变更的记录约定

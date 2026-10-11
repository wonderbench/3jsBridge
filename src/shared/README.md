# 通用 UI 与工具

状态：规划目录已建立，尚未实现本模块；本 README 用于保留 Git 目录和约定边界。

- 职责：存放多个模块实际共用的小型 UI 和工具，避免成为业务杂物目录。
- 依赖边界：保持低依赖，不导入 application、features 或 viewer；纯工具不依赖 UI。
- 后续文件示例（尚不存在）：ui/AccessibleButton.tsx、utils/assertNever.ts。

实现时同步补充测试与文档，不把目录存在视为功能完成。

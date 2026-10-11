# 测试目录

状态：已建立分层目录，目录中的 README 仅为占位；尚未新增这些测试套件或执行器。

- content/：内容契约、引用、来源与审校字段
- unit/：纯逻辑测试
- integration/：加载、取消、状态同步与资源边界
- e2e/：真实浏览器流程
- performance/：视觉基线与真机性能
- fixtures/：正常、异常与基准夹具

现有可运行测试仍位于 `src/domain/teaching.test.ts` 和 `src/app/App.test.tsx`，由 `npm test` 执行，`npm run check` 包含它们。保持就近测试，不为目录占位搬动现有代码。新增跨模块测试时复用公开契约；浏览器、视觉和性能执行器尚未配置，不得宣称已有对应门禁。

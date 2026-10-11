import { useState } from 'react';
import { components, introCourse } from '../demo/introCourse';
import { CoursePlayer } from '../features/course-player/CoursePlayer';
import { BridgeViewer } from '../features/bridge-viewer/BridgeViewer';

export function App() {
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [resetKey, setResetKey] = useState(0);
  const selected = components.find((item) => item.componentId === selectedId);
  const step = introCourse.steps[stepIndex];
  function reset() { setStepIndex(0); setSelectedId(null); setResetKey((value) => value + 1); }
  return <main className="app-shell">
    <header><a className="brand" href="./">3jsBridge</a><span>桥梁知识 · 看见，理解</span></header>
    <section className="intro"><span className="eyebrow">交互教学 / 基础工程小样</span><h1>{introCourse.title}</h1>
      <p>从整体观察到构件认知，用一个可操作的场景连接名称与空间位置。</p></section>
    <div className="learning-layout">
      <section aria-label="观察与选择构件">
        <BridgeViewer selectedId={selectedId} highlightIds={step.sceneIntent.highlightIds} resetKey={resetKey} onSelect={setSelectedId} />
        <div className="viewer-toolbar"><p>拖动旋转 · 滚轮 / 双指缩放 · 点击选择</p><button onClick={reset}>重置学习与视角</button></div>
        <div className="component-list" role="group" aria-label="选择桥梁构件">{components.map((item) =>
          <button key={item.componentId} aria-pressed={selectedId === item.componentId} onClick={() => setSelectedId(item.componentId)}>{item.name}</button>)}</div>
      </section>
      <aside><CoursePlayer course={introCourse} stepIndex={stepIndex} onStepChange={(index) => { setStepIndex(index); setSelectedId(null); }} />
        <section className="detail-card" aria-live="polite" aria-atomic="true"><span className="eyebrow">构件认知</span><h2>{selected?.name ?? '选择一个构件'}</h2><p>{selected?.teachingDescription ?? '点击模型或构件按钮，查看对应的教学说明。'}</p></section>
      </aside>
    </div>
    <footer>当前仅为项目结构与交互基础示例。尺寸、构造均经简化，不用于结构计算、设计或安全判断。</footer>
  </main>;
}

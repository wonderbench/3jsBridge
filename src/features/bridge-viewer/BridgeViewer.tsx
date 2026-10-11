import { Component, type ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface Props {
  selectedId: string | null;
  highlightIds: string[];
  resetKey: number;
  onSelect: (id: string | null) => void;
}

// Stable domain IDs are explicit; they never depend on generated mesh names.
const parts: { id: string; position: [number, number, number]; size: [number, number, number] }[] = [
  { id: 'deck', position: [0, 1.7, 0], size: [7, 0.4, 2] },
  { id: 'pier-left', position: [-2.2, 0.55, 0], size: [0.7, 1.9, 1.3] },
  { id: 'pier-right', position: [2.2, 0.55, 0], size: [0.7, 1.9, 1.3] },
];

class ViewerBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    return this.state.failed ? <p role="status" className="viewer-fallback">三维视图暂不可用。你仍可通过构件按钮阅读本节课程。</p> : this.props.children;
  }
}

export function BridgeViewer({ selectedId, highlightIds, resetKey, onSelect }: Props) {
  return <div className="viewer" aria-label="可旋转的桥梁教学示意模型">
    <ViewerBoundary key={resetKey}>
      <Canvas camera={{ position: [7, 5, 7], fov: 45 }} dpr={[1, 1.5]} frameloop="demand"
        onPointerMissed={() => onSelect(null)}
        fallback={<p className="viewer-fallback">当前设备不支持三维视图，请使用构件按钮学习。</p>}>
        <color attach="background" args={['#e6eeea']} />
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 8, 4]} intensity={2} />
        {parts.map((part) => <mesh key={part.id} position={part.position}
          onClick={(event) => { event.stopPropagation(); onSelect(part.id); }}>
          <boxGeometry args={part.size} />
          <meshStandardMaterial color={selectedId === part.id ? '#e89937' : highlightIds.includes(part.id) ? '#4f9281' : '#708c91'} />
        </mesh>)}
        <gridHelper args={[12, 12, '#bacbc2', '#d2ddd6']} position={[0, -0.42, 0]} />
        <OrbitControls makeDefault target={[0, 0.8, 0]} minDistance={4} maxDistance={18} enablePan={false} />
      </Canvas>
    </ViewerBoundary>
    <span className="viewer-label">教学示意 · 非工程模型</span>
  </div>;
}

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { App } from './App';

// DOM tests cover the teaching UI, not a simulated WebGL renderer.
vi.mock('../features/bridge-viewer/BridgeViewer', () => ({ BridgeViewer: ({ resetKey }: { resetKey: number }) => <div data-testid="viewer">{resetKey}</div> }));

describe('learning flow', () => {
  it('selects a component with the keyboard-accessible alternative', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: '左侧桥墩示意体' }));
    expect(screen.getByRole('heading', { name: '左侧桥墩示意体' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '左侧桥墩示意体' })).toHaveAttribute('aria-pressed', 'true');
  });
  it('bounds navigation, clears old selection and supports repeated reset', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: '上一步' })).toBeDisabled();
    fireEvent.click(screen.getByRole('button', { name: '桥面示意体' }));
    fireEvent.click(screen.getByRole('button', { name: '下一步' }));
    expect(screen.getByRole('heading', { name: '找到桥面' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '选择一个构件' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: '下一步' }));
    expect(screen.getByRole('button', { name: '下一步' })).toBeDisabled();
    fireEvent.click(screen.getByRole('button', { name: '上一步' }));
    expect(screen.getByRole('heading', { name: '找到桥面' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: '重置学习与视角' }));
    fireEvent.click(screen.getByRole('button', { name: '重置学习与视角' }));
    expect(screen.getByRole('heading', { name: '从整体开始' })).toBeInTheDocument();
    expect(screen.getByTestId('viewer')).toHaveTextContent('2');
  });
});

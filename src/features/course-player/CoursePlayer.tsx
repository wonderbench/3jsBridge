import type { Course } from '../../domain/teaching';

interface Props { course: Course; stepIndex: number; onStepChange: (index: number) => void }
export function CoursePlayer({ course, stepIndex, onStepChange }: Props) {
  const step = course.steps[stepIndex];
  return <section aria-labelledby="lesson-title" className="lesson-card">
    <span className="eyebrow">示例课程 · {stepIndex + 1} / {course.steps.length}</span>
    <h2 id="lesson-title">{step.title}</h2>
    <p>{step.text}</p>
    <nav aria-label="课程步骤" className="step-controls">
      <button disabled={stepIndex === 0} onClick={() => onStepChange(stepIndex - 1)}>上一步</button>
      <button disabled={stepIndex === course.steps.length - 1} onClick={() => onStepChange(stepIndex + 1)}>下一步</button>
    </nav>
  </section>;
}

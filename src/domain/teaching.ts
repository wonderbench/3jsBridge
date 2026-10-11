/** Teaching contracts are independent of React and Three.js. */
export interface BridgeComponent {
  componentId: string;
  name: string;
  type: 'deck' | 'pier';
  teachingDescription: string;
}

export interface SceneIntent {
  highlightIds: string[];
}

export interface LessonStep {
  stepId: string;
  title: string;
  text: string;
  focusComponentIds: string[];
  sceneIntent: SceneIntent;
}

export interface Course {
  courseId: string;
  title: string;
  objectives: string[];
  contentVersion: string;
  steps: LessonStep[];
}

/** Validate cross-references at the content boundary, before rendering. */
export function validateCourse(course: Course, components: BridgeComponent[]): void {
  const ids = new Set(components.map((item) => item.componentId));
  if (ids.size !== components.length) throw new Error('Duplicate componentId');
  if (!course.steps.length) throw new Error('Course needs at least one step');
  const stepIds = new Set<string>();
  for (const step of course.steps) {
    if (stepIds.has(step.stepId)) throw new Error(`Duplicate stepId: ${step.stepId}`);
    stepIds.add(step.stepId);
    for (const id of [...step.focusComponentIds, ...step.sceneIntent.highlightIds]) {
      if (!ids.has(id)) throw new Error(`Unknown componentId: ${id}`);
    }
  }
}

import { describe, expect, it } from 'vitest';
import { validateCourse } from './teaching';
import { components, introCourse } from '../demo/introCourse';

describe('teaching content contract', () => {
  it('accepts the sample course and all of its component references', () => {
    expect(() => validateCourse(introCourse, components)).not.toThrow();
  });
  it('rejects missing component references', () => {
    expect(() => validateCourse(introCourse, [])).toThrow('Unknown componentId');
  });
  it('rejects duplicate component IDs', () => {
    expect(() => validateCourse(introCourse, [...components, components[0]])).toThrow('Duplicate componentId');
  });
  it('rejects an empty course', () => {
    expect(() => validateCourse({ ...introCourse, steps: [] }, components)).toThrow('at least one step');
  });
  it('rejects duplicate step IDs', () => {
    expect(() => validateCourse({ ...introCourse, steps: [introCourse.steps[0], introCourse.steps[0]] }, components)).toThrow('Duplicate stepId');
  });
});

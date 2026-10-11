import { validateCourse, type BridgeComponent, type Course } from '../domain/teaching';

export const components: BridgeComponent[] = [
  { componentId: 'deck', name: '桥面示意体', type: 'deck', teachingDescription: '上方的水平示意体用于识别桥面位置。本小样将桥面系与上部结构简化合并，不展示真实构造层次。' },
  { componentId: 'pier-left', name: '左侧桥墩示意体', type: 'pier', teachingDescription: '桥墩是桥梁的下部支承构件之一。这里省略了支座、基础与配筋，只用于认识构件位置。' },
  { componentId: 'pier-right', name: '右侧桥墩示意体', type: 'pier', teachingDescription: '对照左右两侧的桥墩，观察它们与上方水平构件的位置关系。示意体不代表任何具体桥型设计。' },
];

export const introCourse: Course = {
  courseId: 'bridge-components-intro',
  title: '认识桥梁构件',
  objectives: ['观察构件位置', '建立名称与空间位置的对应关系'],
  contentVersion: '0.1.0-demo',
  steps: [
    { stepId: 'overview', title: '从整体开始', text: '旋转模型，观察水平构件与竖向构件的位置。也可以通过下方按钮选择构件。', focusComponentIds: [], sceneIntent: { highlightIds: [] } },
    { stepId: 'deck', title: '找到桥面', text: '高亮区域是桥面位置的简化示意。试着从侧面和上方观察。', focusComponentIds: ['deck'], sceneIntent: { highlightIds: ['deck'] } },
    { stepId: 'piers', title: '认识桥墩', text: '高亮的两个竖向示意体表示桥墩。点击其中一个，查看对应说明。', focusComponentIds: ['pier-left', 'pier-right'], sceneIntent: { highlightIds: ['pier-left', 'pier-right'] } },
  ],
};

validateCourse(introCourse, components);

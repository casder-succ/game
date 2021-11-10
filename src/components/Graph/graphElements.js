let elements = [
  {
    id: '1',
    type: 'input',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: {
      label: 'Input Node',
      content: 'Hello! This is the first node.'
    },
    position: { x: 250, y: 420 },
  },
  {
    id: '2',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: {
      label: 'Default Node',
      content: 'Hello. I am the second node'
    },
    position: { x: 500, y: 420 },
  },
  {
    id: '3',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: {
      label: ' Node',
      content: ' '
    },
    position: { x: 790, y: 290 },
  },
  {
    id: '4',
    sourcePosition: 'right',
    targetPosition: 'left',
    data: {
      label: ' Node',
      content: ' '
    },
    position: { x: 790, y: 550 },
  },
  { id: 'e1-2', source: '1', target: '2', },
  { id: 'e2-3', source: '2', target: '3', },
  { id: 'e2-4', source: '2', target: '4', },
];

export default elements;
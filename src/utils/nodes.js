export function Node(position = {x: 20, y: 20}) {
    this.id = `f${(~~(Math.random() * 1e8)).toString(16)}`;
    this.sourcePosition = 'right';
    this.targetPosition = 'left';
    this.data = {
        label: '',
        title: '',
        content: '',
        links: [],
    };
    this.position = position
}
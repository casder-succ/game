const getDefaultID = () => `f${(~~(Math.random() * 1e8)).toString(16)}`;

export function NodeFlow(x = 20, y = 20, label = 'sample', id = getDefaultID()) {
    this.id = id;
    this.type = "textNode";
    this.sourcePosition = 'right';
    this.targetPosition = 'left';
    this.data = {
        label,
        title: '',
        content: '',
        links: [],
        media: {
            photo: '',
            video: '',
        },
    };
    this.position = {x, y};
}
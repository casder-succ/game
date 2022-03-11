let elements = [
    {
        id: '1',
        type: 'input',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: {
            label: 'Emma wakes up',
            content: 'Hello! This is the first node. \n [[Default Node]]',
            links: [{id: 2, label: 'Default Node'}],
            media: {
                photo: '',
                video: '',
            },
        },

        position: {x: 250, y: 420},
    },
    {
        id: '2',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: {
            label: 'Emma sends letter',
            content: 'Hello. I am the second node [[Node]] [[Node]]',
            links: [{id: 3, label: 'Node'}, {id: 4, label: 'Node'}],
            media: {
                photo: '',
                video: '',
            },
        },

        position: {x: 500, y: 420},
    },
    {
        id: '3',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: {
            label: 'Emma eats',
            content: '',
            links: [],
            media: {
                photo: '',
                video: '',
            },
        },
        position: {x: 790, y: 290},
    },
    {id: 'e1-2', source: '1', target: '2',},
    {id: 'e2-3', source: '2', target: '3',},
];

export default elements;
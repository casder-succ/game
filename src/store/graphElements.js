let elements = {
    nodes: [
        {
            id: 'f1',
            type: 'textNode',
            sourcePosition: 'right',
            targetPosition: 'left',
            data: {
                label: 'Emma wakes up',
                content: 'Hello! This is the first node. [[Emma sends letter]]',
                links: [{id: 2, label: 'Emma sends letter', position: "end"}],
                media: {
                    photo: '',
                    video: '',
                },
                isActive: false,
            },

            position: {x: 250, y: 420},
        },
        {
            id: 'f2',
            type: 'textNode',
            sourcePosition: 'right',
            targetPosition: 'left',
            data: {
                label: 'Emma sends letter',
                content: 'Hello. I am the second node [[Emma eats]]',
                links: [{id: 3, label: 'Emma eats', position: "end"}],
                media: {
                    photo: '',
                    video: '',
                },
                isActive: false,
            },

            position: {x: 500, y: 420},
        },
        {
            id: 'f3',
            type: 'textNode',
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
                isActive: false,
            },
            position: {x: 790, y: 290},
        },
    ],
    edges: [
        {id: 'ef1-f2', source: 'f1', target: 'f2',},
        {id: 'ef2-f3', source: 'f2', target: 'f3',},
    ]
};

export default elements;
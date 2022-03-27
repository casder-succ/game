let elements = {
    nodes: [
        {
            id: '1',
            type: 'input',
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
            id: '2',
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
                isActive: false,
            },
            position: {x: 790, y: 290},
        },
    ],
    edges: [
        {id: 'e1-2', source: '1', target: '2',},
        {id: 'e2-3', source: '2', target: '3',},
    ]
};

export default elements;
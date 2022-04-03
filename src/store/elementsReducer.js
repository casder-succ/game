import initialElements from './graphElements';
import {
    NODES__REMOVE_NODES,
    NODES__ADD_NODES,
    NODES__UNSET_CURRENT,
    NODES__CHANGE_MEDIA,
    NODES__SET_CURRENT,
    NODES__NEW_NODE,
    NODES__CHANGE_CONTENT,
    NODES__CHANGE_LABEL,
    NODES__ON_CONNECT,
    NODES__REMOVE_NODE,
    NODES__REMOVE_LINK_ON,
    NODES__REMOVE_PH_LINK_ON,
    NODES__ADD_LINK,
    NODES__ADD_NODE,
    EDGES__ADD_EDGES,
    EDGES__ADD_EDGE,
    EDGES__REMOVE_EDGE, EDGES__REMOVE_EDGES, EDGES__REMOVE_FROM, EDGES__REMOVE_TO, EDGES__REMOVE_LINK
} from "./types";

const initialState = {
    nodes: initialElements.nodes,
    edges: initialElements.edges,
};

const elementsReducer = (state = initialState, action) => {
    switch (action.type) {
        case EDGES__ADD_EDGES:
            return {
                nodes: state.nodes,
                edges: [
                    ...state.edges,
                    ...action.payload,
                ],
            };
        case EDGES__ADD_EDGE:
            return {
                nodes: state.nodes,
                edges: [
                    ...state.edges,
                    action.payload
                ]
            }
        case EDGES__REMOVE_EDGE:
            return {
                nodes: state.nodes,
                edges: [
                    ...state.edges.filter(edge => edge.id !== action.payload.id),
                ],
            };

        case EDGES__REMOVE_EDGES:
            const idList1 = action.payload.map(el => el.id);
            return {
                nodes: state.nodes,
                edges: [
                    ...state.edges.filter(edge => !idList1.find(id => id === edge.id)),
                ],
            };
        case EDGES__REMOVE_FROM:
            return {
                nodes: state.nodes,
                edges: state.edges.filter(edge => !edge.id.startsWith(`e${action.payload.id}`)),
            };
        case EDGES__REMOVE_TO:
            return {
                nodes: state.nodes,
                edges: state.edges.filter(edge => !edge.id.endsWith(`${action.payload.id}`)),
            };

        case EDGES__REMOVE_LINK:
            return {
                nodes: state.nodes,
                edges: state.edges.filter(edge => !(edge.target === action.payload.targetId && edge.source === action.payload.sourceId))
            };
        case NODES__ADD_NODES:
            return {
                nodes: [...state.nodes, ...action.payload,],
                edges: state.edges,
            };
        case NODES__REMOVE_NODES:
            const idList = action.payload.map(node => node.id);
            return {
                edges: state.edges,
                nodes: state.nodes.filter(node => !idList.find(id => id === node.id)),
            };
        case NODES__REMOVE_NODE:
            return {
                edges: state.edges,
                nodes: state.nodes.filter(node => node.id !== action.payload.id),
            };
        case NODES__SET_CURRENT:
            return {
                edges: state.edges,
                nodes: [...state.nodes.map(node => {
                    node.data.isActive = node.id === action.payload.id;
                    return node;
                }),],
            };
        case NODES__UNSET_CURRENT:
            return {
                edges: state.edges,
                nodes: [...state.nodes.map(node => {
                    node.data.isActive = false;

                    return node
                }),],
            };
        case NODES__CHANGE_MEDIA:
            return {
                edges: state.edges,
                nodes: state.nodes.map((node) => {
                    if (node.id === action.payload.id) {
                        node.data.media.video = action.payload.video;
                        node.data.media.photo = action.payload.photo;
                    }
                    return node;
                }),
            };
        case NODES__CHANGE_CONTENT:
            return {
                edges: state.edges,
                nodes: state.nodes.map((node) => {
                    if (node.id === action.payload.id) {
                        node.data.content = action.payload.content;
                    }
                    return node;
                }),
            };
        case NODES__CHANGE_LABEL:
            return {
                edges: state.edges,
                nodes: state.nodes.map((node) => {
                    if (node.id === action.payload.id) {
                        node.data.label = action.payload.label;
                    }
                    node.data.links.forEach(link => {
                        if (link.id === action.payload.id) {
                            node.data.content = node.data.content.replace(link.label, action.payload.label);
                            link.label = link.label.replace(link.label, action.payload.label);
                        }
                    })
                    return node;
                }),
            };
        case NODES__NEW_NODE:
            let index = 0;
            // eslint-disable-next-line no-loop-func
            while (state.nodes.find(node => node.data.label === `sample${index ? ' ' + index : ''}`)) {
                index += 1;
            }
            return {
                edges: state.edges,
                nodes: [
                    ...state.nodes,
                    {
                        ...action.payload,
                        data: {
                            ...action.payload.data, label: `sample${index ? ' ' + index : ''}`
                        }
                    }
                ],
            };
        case NODES__ON_CONNECT:
            return {
                ...state,
                nodes: state.nodes.map((node) => {
                    console.log(node)
                    let content;
                    state.nodes.forEach(el => {
                        if (el.id === action.payload.target) {
                            content = el.data.label || `id: ${el.id}`;
                        }
                    })

                    if (node.id === action.payload.source) {
                        node.data.links.push({id: action.payload.target, label: content});
                        node.data.content += `[[${content}]]`;
                    }
                    return node;
                })
            };
        case NODES__REMOVE_LINK_ON:
            return {
                edges: state.edges,
                nodes: state.nodes.map(node => {
                    let indexOf = -1;
                    let name = '';
                    node.data.links.forEach((link, index) => {
                        if (indexOf === -1 && link.id === action.payload.id) {
                            indexOf = index;
                            name = link.label;
                        }
                    });
                    if (indexOf !== -1) {
                        node.data.links.splice(indexOf, 1);
                        node.data.content = node.data.content.split('');
                        node.data.content.splice(node.data.content.join('').indexOf(`[[${name}]]`), `[[${name}]]`.length);
                        node.data.content = node.data.content.join('');
                    }
                    return node;
                })
            };
        case NODES__REMOVE_PH_LINK_ON:
            return {
                edges: state.edges,
                nodes: state.nodes.map(node => {
                    if (node.id === action.payload.sourceId) {
                        let indexOf = -1;
                        node.data.links.forEach((link, index) => {
                            if (indexOf === -1 && link.id === action.payload.id) {
                                indexOf = index;
                            }
                        });
                        node.data.links.splice(indexOf, 1);
                    }
                    return node
                })
            };
        case NODES__ADD_LINK:
            const nodeNamesL = state.nodes.map(node => node.data.label);
            return {
                edges: state.edges,
                nodes: state.nodes.map(node => {
                    if (node.id === action.payload.source) {
                        let id = "";
                        if (nodeNamesL.includes(action.payload.label)) {
                            [id] = state.nodes.filter(node => node.data.label === action.payload.label).map(node => node.id)
                        }
                        node.data.links.push({
                            label: action.payload.label,
                            id: id || action.payload.id,
                        });
                    }
                    return node;
                })
            };
        case NODES__ADD_NODE:
            const nodeNames = state.nodes.map(node => node.data.label);
            if (!nodeNames.includes(action.payload.node.data.label)) {
                state.nodes.push(action.payload.node);
                state.edges.push(action.payload.edge)
            } else {
                state.edges.push({
                    ...action.payload.edge,
                    id: action.payload.edge.id.replace(action.payload.node.id, state.nodes.filter(node => node.data.label === action.payload.node.label).map(node => node.data.label)[0]),
                    target: state.nodes.filter(node => node.data.label === action.payload.node.data.label).map(node => node.id)[0]
                })
            }
            return {
                edges: state.edges,
                nodes: [...state.nodes]
            };
        default:
            return state;
    }
}

export default elementsReducer;
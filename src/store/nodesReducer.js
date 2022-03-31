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
    NODES__REMOVE_NODE, NODES__REMOVE_LINK_ON
} from "./types";

const initialState = {
    nodes: initialElements.nodes,
    nodesNames: initialElements.nodes.map(node => node.data.label),
};

const nodesReducer = (state = initialState, action) => {
    switch (action.type) {
        case NODES__ADD_NODES:
            state.nodesNames.push(action.payload.map(node => node.data.label));
            return {
                nodes: [
                    ...state.nodes,
                    ...action.payload,
                ],
                nodesNames: state.nodesNames

            };
        case NODES__REMOVE_NODES:
            const idList = action.payload.map(node => node.id);
            const namesList = action.payload.map(node => node.data.label);
            return {
                nodes: state.nodes.filter(node => !idList.find(id => id === node.id)),
                nodesNames: state.nodesNames.filter((nodeName) => !namesList.find(name => name === nodeName)),
            };
        case NODES__REMOVE_NODE:
            const [nodeName] = state.nodes.filter(node => node.id !== action.payload.id).map(node => node.data.label);
            return {
                nodes: state.nodes.filter(node => node.id !== action.payload.id),
                nodesNames: state.nodesNames.filter((name) => name !== nodeName),
            };
        case NODES__SET_CURRENT:
            return {
                nodes: [
                    ...state.nodes.map(node => {
                        node.data.isActive = node.id === action.payload.id;
                        return node;
                    }),
                ],
            };
        case NODES__UNSET_CURRENT:
            return {
                nodes: [
                    ...state.nodes.map(node => {
                        node.data.isActive = false;

                        return node
                    }),
                ],
            };
        case NODES__CHANGE_MEDIA:
            return {
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
                nodes: state.nodes.map((node) => {
                    if (node.id === action.payload.id) {
                        node.data.content = action.payload.content;
                    }
                    return node;
                }),
            };
        case NODES__CHANGE_LABEL:
            return {
                nodes: state.nodes.map((node) => {
                    if (node.id === action.payload.id) {
                        node.data.label = action.payload.label;
                    }
                    return node;
                }),
            };
        case NODES__NEW_NODE:
            let index = 0;
            while (true) {
                if (state.nodes.find(node => node.data.label === `sample${index ? index : ''}`))
                    index += 1;
                else
                    break;
            }
            state.nodes.push({
                ...action.payload,
                data: {
                    ...action.payload.data,
                    label: `sample${index ? index : ''}`
                }
            });
            return {
                nodes: state.nodes,
            };
        case NODES__ON_CONNECT:
            return {
                ...state,
                nodes: state.nodes.map((node) => {
                    let content;
                    state.nodes.forEach(el => {
                        if (el.id === action.payload.content) {
                            content = el.data.label || `id: ${el.id}`;
                        }
                    })

                    if (node.id === action.payload.id) {
                        node.data.links.push({id: action.payload.id, label: content});
                        node.data.content += `[[${content}]]`;
                    }
                    return node;
                })
            };
        case NODES__REMOVE_LINK_ON:
            return {
                ...state.nodes.map
            };
        default:
            return state;
    }
}

export default nodesReducer;
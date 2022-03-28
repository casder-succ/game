import initialElements from './graphElements';
import {
    NODES__REMOVE_NODES,
    NODES__ADD_NODES,
    NODES__UNSET_CURRENT,
    NODES__CHANGE_MEDIA,
    NODES__SET_CURRENT, NODES__NEW_NODE, NODES__CHANGE_CONTENT, NODES__CHANGE_LABEL, NODES__ON_CONNECT
} from "./types";

const initialState = {
    nodes: initialElements.nodes,
};

const nodesReducer = (state = initialState, action) => {
    switch (action.type) {
        case NODES__ADD_NODES:
            return {
                nodes: [
                    ...state.nodes,
                    ...action.payload,
                ],
            };
        case NODES__REMOVE_NODES:
            const idList = action.payload.map(node => node.id);
            return {
                nodes: [
                    ...state.nodes.filter(node => !idList.find(id => id === node.id)),
                ],
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
        default:
            return state;
    }
}

export default nodesReducer;
import initialElements from './graphElements';
import {
    NODES__REMOVE_NODES,
    NODES__ADD_NODES,
    NODES__UNSET_CURRENT,
    NODES__CHANGE_MEDIA,
    NODES__SET_CURRENT
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
                        return node
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

        default:
            return state;
    }
}

export default nodesReducer;
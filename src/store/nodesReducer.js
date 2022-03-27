import initialElements from './graphElements';
import {NODES__ADD_NODES} from "./types";

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
                ]
            };
    }
}

export default nodesReducer;
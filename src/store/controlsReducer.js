import {SET_CURR, SET_DRAG, UNSET_CURR, UNSET_DRAG} from "./types";

const initialState = {
    isDraggable: true
}

const controlsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DRAG:
            return {
                isDraggable: true
            };
        case UNSET_DRAG:
            return {
                isDraggable: false
            };
        default:
            return state;
    }
}

export default controlsReducer;
import {SET_CURR, UNSET_CURR} from "./types";

const initialState = {
    currElem: null
}

const currElemReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURR:
            return {
                currElem: action.payload
            };
        case UNSET_CURR:
            return {
                currElem: null
            };
        default:
            return state;
    }
}

export default currElemReducer;
import {createStore} from "redux";
import initialElements from './graphElements';

const initialState = {
    elements: initialElements
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NODE":
            break;
        case "ADD_EDGE":
            break;
        case "CHANGE_LABEL":
            break;
        case "CHANGE_CONTENT":
            break;
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
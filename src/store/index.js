import {combineReducers, createStore} from "redux";
import elementsReducer from "./elementsReducer";
import currElemReducer from "./currElemReducer";

const rootReducer = combineReducers({
    currElement: currElemReducer,
    elements: elementsReducer,
})

const store = createStore(rootReducer);

export default store;
import {combineReducers, createStore} from "redux";
import elementsReducer from "./elementsReducer";
import currElemReducer from "./currElemReducer";

const rootReducer = combineReducers({
    elements: elementsReducer,
    currElement: currElemReducer,
})

const store = createStore(rootReducer);

export default store;
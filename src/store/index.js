import {combineReducers, createStore} from "redux";
import edgesReducer from "./edgesReducer";
import currElemReducer from "./currElemReducer";
import editorFieldsReducer from "./editorFieldsReducer";
import nodesReducer from "./nodesReducer";

const rootReducer = combineReducers({
    currElement: currElemReducer,
    edges: edgesReducer,
    nodes: nodesReducer,
    editorFields: editorFieldsReducer,
})

const store = createStore(rootReducer);

export default store;
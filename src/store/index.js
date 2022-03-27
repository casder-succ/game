import {combineReducers, createStore} from "redux";
import edgesReducer from "./edgesReducer";
import currElemReducer from "./currElemReducer";
import editorFieldsReducer from "./editorFieldsReducer";
import controlsReducer from "./controlsReducer";
import nodesReducer from "./nodesReducer";

const rootReducer = combineReducers({
    currElement: currElemReducer,
    edges: edgesReducer,
    nodes: nodesReducer,
    editorFields: editorFieldsReducer,
    controls: controlsReducer,
})

const store = createStore(rootReducer);

export default store;
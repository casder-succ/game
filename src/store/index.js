import {combineReducers, createStore} from "redux";
import elementsReducer from "./elementsReducer";
import currElemReducer from "./currElemReducer";
import editorFieldsReducer from "./editorFieldsReducer";
import controlsReducer from "./controlsReducer";

const rootReducer = combineReducers({
    currElement: currElemReducer,
    elements: elementsReducer,
    editorFields: editorFieldsReducer,
    controls: controlsReducer,
})

const store = createStore(rootReducer);

export default store;
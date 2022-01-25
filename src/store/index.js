import {createStore} from "redux";
import elementsReducer from "./elementsReducer";
import currElemReducer from "./currElemReducer";


const store = createStore(elementsReducer);

export default store;
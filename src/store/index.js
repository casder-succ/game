import {createStore} from "redux";
import elementsReducer from "./elementsReducer";


const store = createStore(elementsReducer);

export default store;
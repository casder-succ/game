const initialState = {
    currElem: null
}

const currElemReducer = (state = initialState, action) => {
    switch (action) {
        case "SET_CURR":
            return {...state, currElem: action.payload};
        case "UNSET_CURR":
            return {...state, currElem: null};
        default:
            return state;
    }
}

export default currElemReducer;
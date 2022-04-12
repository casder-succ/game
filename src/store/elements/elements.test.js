import elementsReducer from "./elementsReducer";
import {NODES__ADD_NODES} from "../types/types";

describe("elements reducer", function () {
    it('should return no warnings', function () {
        const state = {};
        const stateExp = elementsReducer({}, {});
        expect(stateExp).toEqual(state);
    });

    it('should adds nodes', function () {
        const nodes = [{id: 'f1', data: {label: 'hhh'}}];
        const newState = elementsReducer({nodes: []}, {type: NODES__ADD_NODES, payload: nodes})
        expect(newState).toEqual({nodes})
    });

});
import elementsReducer from "./elementsReducer";
import elements from "../state/graphElements";
import {EDGES__ADD_EDGE, NODES__ADD_NODES} from "../types/types";

describe("elements reducer", function () {
    const state = {
        nodes: elements.nodes,
        edges: [elements.edges[0]],
        currentElement: null,
    };

    it('should return no warnings', function () {
        const stateExp = elementsReducer(state, {});
        expect(stateExp).toEqual(state);
    });

    it('should add nodes', function () {
        const nodes = [{id: 'f1', data: {label: 'hhh'}}];

        const newState = elementsReducer(state, {type: NODES__ADD_NODES, payload: nodes});
        expect(newState).toEqual({...state, nodes: [...state.nodes, ...nodes]});
    });

    it('should add edges', function () {
        const edge = {id: "ef1-f3", source: 'f1', target: 'f3'}
        const newState = elementsReducer(state, {type: EDGES__ADD_EDGE, payload: edge})
        expect(newState).toEqual({...state, edges: [...state.edges, edge]})
    });

});
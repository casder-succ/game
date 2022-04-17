import elements from "../store/state/graphElements";
import {parseElementContent} from "./parsing";
import elementsReducer from "../store/elements/elementsReducer";

const state = {
    nodes: [...elements.nodes],
    edges: [...elements.edges],
};
const element = state.nodes[0];
let newState = {...state};
let newNode;
let newEdge;
let actions;

describe("parsing content with one new node", function () {

    beforeEach(() => {
        actions = parseElementContent(element.data.content + "[[anna]]", element, element.position.x, element.position.y);
        for (const action of actions) {
            newState = elementsReducer(newState, action);
        }
        newNode = newState.nodes.find(node => !elements.nodes.find(n => n.id === node.id));
        newEdge = newState.edges.find((edge => !elements.edges.find((e => e.id === edge.id))))
    });

    it('should create new element', function () {
        expect(newState.nodes.length).toBe(4);
    });

    it('should create new element with given label', function () {
        expect(newNode.data.label).toBe("anna");
    });

    it('should create link on new node', function () {
        expect(newState.nodes.find(node => node.id === element.id).data.links).toEqual([{id: 'f2', label: 'Emma sends letter', position: "end"}, {label: "anna", id: newNode.id}]);
    });

    it('should create edge', function () {
        expect(newState.edges.length).toBe(elements.edges.length + 1);
    });

    it('should create edge from given node', function () {
        expect(newEdge.source).toBe(element.id);
    });

    it('should create edge to new node', function () {
        expect(newEdge.target).toBe(newNode.id);
    });

});

describe("parsing content after deleting [[]]", function () {
    let elAfter;
    beforeEach(() => {
        actions = parseElementContent(element.data.content.replace("[[", ""), element, element.position.x, element.position.y);
        for (const action of actions) {
            newState = elementsReducer(newState, action);
        }
        elAfter = newState.nodes.find(node => node.id === element.id);
    })

    it('should delete edge', function () {
        expect(newState.edges.length).toEqual(elements.edges.length - 1);
    });

    it('should delete link', function () {
        expect(elAfter.data.links.length).toBe(0);
    });

});


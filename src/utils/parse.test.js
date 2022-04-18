import elements from "../store/state/graphElements";
import {parseElementContent} from "./parsing";
import elementsReducer from "../store/elements/elementsReducer";
import {
    removeEdgesFrom, removeEdgesTo, removeLinkOn, removeNode
} from "../store/types/actionCreators";

const state = {
    nodes: [...elements.nodes],
    edges: [...elements.edges],
};
const element = state.nodes[0];
let newState;
let newNode;
let newEdge;
let actions;

describe("parsing content with one new node", function () {
    beforeEach(() => {
        newState = JSON.parse(JSON.stringify(elements));
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
        expect(newState.nodes.find(node => node.id === element.id).data.links).toEqual([{
            id: 'f2', label: 'Emma sends letter', position: "end"
        }, {label: "anna", id: newNode.id}]);
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
        newState = JSON.parse(JSON.stringify(elements));
        actions = parseElementContent(element.data.content.replace("[[", ""), element, element.position.x, element.position.y);
        for (const action of actions) {
            newState = elementsReducer(newState, action);
        }
        elAfter = newState.nodes.find(node => node.id === element.id);
    });

    it('should delete edge', function () {
        expect(newState.edges.length).toEqual(elements.edges.length - 1);
    });

    it('should delete link', function () {
        expect(elAfter.data.links.length).toBe(0);
    });

});

describe("parsing after deleting node", function () {
    const node = state.nodes[1];
    beforeEach(() => {
        const actions = [removeLinkOn(node.id), removeNode(node.id), removeEdgesTo(node.id), removeEdgesFrom(node.id)];
        newState = JSON.parse(JSON.stringify(elements));
        for (const action of actions) {
            newState = elementsReducer(newState, action);
        }
    });

    it('should delete node', function () {
        expect(newState.nodes.length).toBe(elements.nodes.length - 1);
    });

    it('should delete links', function () {
        const label = node.data.label;
        let count = 0;
        newState.nodes.forEach(node => node.data.links.find(link => link.label === label) ? count++ : count += 0);

        expect(count).toBe(0);
    });

    it('should delete edges', function () {
        let count = 0;
        for (const edge of newState.edges) {
            if (edge.id.includes(node.id)) count++;
        }

        expect(count).toBe(0);
    });

});

describe("parsing after editing [[]]", function () {
    let node;
    let oldLabel;
    let id;
    const newLabel = 'tomara loves'
    beforeEach(() => {
        node = JSON.parse(JSON.stringify(elements.nodes[0]))
        oldLabel = /\[\[[\sA-Za-z0-9]+]]/gm.exec(node.data.content)[0].replace(/(\[\[|]])/gm, '');
        newState = JSON.parse(JSON.stringify(elements));
        id = newState.nodes.find(node => node.data.label === oldLabel).id;
        const actions = parseElementContent(node.data.content.replace(/\[\[[\sA-Za-z0-9]+]]/gm, `[[${newLabel}]]`), node, node.position.x, node.position.y);
        for (const action of actions) {
            newState = elementsReducer(newState, action);
        }
    });

    it('should delete link', function () {
        let count = 0;
        for (const node of newState.nodes) {
            if (node.data.links.find(link => link.label === oldLabel)) count++;
        }

        expect(count).toBe(0);
    });

    it('should delete edge', function () {
        let count = 0;
        for (const edge of newState.edges) {
            if (edge.id === `e${node.id}-${id}`) count++;
        }

        expect(count).toBe(0);
    });

    it('should create new link', function () {

    });

    it('should add new edge', function () {

    });

});

describe("parsing after adding few [[]]", function () {


});

describe("parsing after editing label", function () {


});

describe("parsing after deleting few [[]]", function () {


});

describe("parsing after adding the same [[]]", function () {


});

describe("parsing after adding the same and new [[]]", function () {


});

describe("parsing after deleting few nodes", function () {
    const node1 = state.nodes[1];
    const node2 = state.nodes[2];

    beforeEach(() => {
        const actions = [
            removeLinkOn(node1.id), removeNode(node1.id), removeEdgesTo(node1.id), removeEdgesFrom(node1.id),
            removeLinkOn(node2.id), removeNode(node2.id), removeEdgesTo(node2.id), removeEdgesFrom(node2.id)
        ];
        newState = JSON.parse(JSON.stringify(elements));

        for (const action of actions) {
            newState = elementsReducer(newState, action);
        }
    });

    it('should delete nodes', function () {
        expect(newState.nodes.length).toBe(elements.nodes.length - 2);
    });

    it('should delete edges', function () {
        let count = 0;
        for (const edge of newState.edges) {
            if (edge.id.includes(node1.id) || edge.id.includes(node2.id)) count++;
        }

        expect(count).toBe(0);
    });

    it('should delete links', function () {
        let count = 0;
        for (const node of newState.nodes) {
            if (node.data.links.find(link => link.label === node1.data.label || link.label === node2.data.label)) count++;
        }

        expect(count).toBe(0);
    });

    it('should delete physical links', function () {
        let count = 0;
        for (const node of newState.nodes) {
            if (node.data.content.includes(node1.data.label) || node.data.content.includes(node2.data.label)) count++;
        }

        expect(count).toBe(0);
    });

});
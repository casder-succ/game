import { shallow, render, mount } from 'enzyme';
import React, {useEffect} from 'react';
import Graph from "./Graph";
import {Provider} from "react-redux";
import store from "../../store";
React.useLayoutEffect = React.useEffect;

describe("Graph component", function () {
    it('should render without errors', function () {
        const component = render(
            <Provider store={store}>
                <div style={{width: "100vw", height: "100vh"}}>
                    <Graph />
                </div>
            </Provider>
        );
        const wrapper = component.find('.react-flow__renderer');
        expect(wrapper.length).toBe(1);
    });

    it('should render container for nodes', function () {
        const component = render(
            <Provider store={store}>
                <Graph />
            </Provider>
        );

        const wrapper = component.find('.react-flow__nodes');
        expect(wrapper.length).toBe(1);
    });

    it('should render initial elements', function () {
        useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f());

        const component = shallow(
            <Provider store={store}>
                <Graph />
            </Provider>
        );

        const nodes = component.find('.react-flow__node');
        expect(nodes.length).toBe(3);
    });
});
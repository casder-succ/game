import { shallow, render } from 'enzyme';
import React from 'react';
import Graph from "./Graph";
import {Provider} from "react-redux";
import store from "../../store";
React.useLayoutEffect = React.useEffect;

describe("Graph component", function () {
    it('should render without errors', function () {
        const component = render(
            <Provider store={store}>
                <Graph />
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
});
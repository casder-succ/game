import elements from "../src/store/state/graphElements";
import React from "react";
import {shallow} from 'enzyme';
import Graph from "../src/components/Graph/Graph";

describe("Should render correct num of elements", function () {
    it('should render without errors', function () {
        const component = shallow(<Graph />);
        const wrapper = component.find('.react-flow__renderer');
        expect(wrapper.length).toBe(1);
    });
});


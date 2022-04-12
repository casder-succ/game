import Enzyme from 'enzyme';
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import React from "react"
React.useLayoutEffect = React.useEffect

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true,
})
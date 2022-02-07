import './App.sass';
import Graph from "./components/Graph/Graph";
import NodeList from "./components/NodeList/NodeList";
import React from "react";

function App() {
    return (
        <div className="App">
            <Graph/>
            <NodeList/>
        </div>
    );
}

export default App;

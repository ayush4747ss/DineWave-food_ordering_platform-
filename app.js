// const heading =React.createElement("h1",{id:"heading"},"hello world from react");

const parent=React.createElement(
    "div",
    {id:"parent"},
    [React.createElement("div",{id:"child"},[React.createElement("h1",{id:"sibling1"},"im h1 tag"),React.createElement("h2",{id:"sibling2"},"my name is shukla")]),
    React.createElement("div",{id:"child"},[React.createElement("h1",{id:"sibling1"},"im h1 tag"),React.createElement("h2",{id:"sibling2"},"my name is shukla")]),
]
    );


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
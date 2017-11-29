import React, { Component } from "react";
import ReactDOM from "react-dom";

// Create a new component. 
// This component will produce some HTML
const App = () => {  
    return (
        <div>
            my default app
        </div>
    );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

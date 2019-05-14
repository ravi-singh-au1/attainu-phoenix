import React from "react";
import ReactDOM from "react-dom";

class Button extends React.Component {
    render () {
        
        return <button>click me</button>
    }
}


ReactDOM.render(<Button/>, document.getElementById("root"))

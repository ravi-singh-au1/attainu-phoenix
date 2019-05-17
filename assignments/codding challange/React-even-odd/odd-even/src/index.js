import React from "react";
import ReactDOM from "react-dom";

class Input extends React.Component {
    
    render() {
        return (
            <div>

                <input type="number" onChange={this.props.onChange}></input>
                <br />
            </div>
        )

    }
}
class Button extends React.Component {
    render() {
        return (
            <button className="btn btn-primary" onClick={this.props.onClick}>Submit</button>
        )

    }
}


class App extends React.Component {
   

    
    render() {

        return (

            <div className="container">
               


                <Input />
                <Button />
            </div>


        )


    }
}
ReactDOM.render(<App />, document.getElementById('root'));

import React from "react";
import ReactDOM from "react-dom";

class Input extends React.Component {
    checkOddEven() {
        if (this.state.number % 2 == 0) {
            alert(" Even")
        } else {
            alert("not Even");
        }
    }


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
    constructor(props) {
        super(props);
        this.state = {

            number: 0
        }
        this.state = {
            title: "even odd numner"
        }

        this.getNumber = this.getNumber.bind(this);
        this.checkOddEven = this.checkOddEven.bind(this);

    }

getNumber(event) {
       
    this.setState({ number: event.target.value });
}


    
    render() {

        return (

            <div className="container">
                <h1>{this.state.title}</h1>


                <Input onChange={this.getNumber} />
                <Button onClick={this.checkOddEven} />
            </div>


        )


    }
}
ReactDOM.render(<App />, document.getElementById('root'));

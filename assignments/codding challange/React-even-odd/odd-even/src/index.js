import React from "react";
import ReactDOM from "react-dom";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Odd even number"
        }
        this.state={
            number:0
        }
    }
changeNumber(event)
{
    this.setState({ number: event.target.value });
}
    

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>

                <input type="number" onChange={this.state.number}></input>
                <br />
            </div>
        )

    }
}
class Button extends React.Component {
    buttonClick(event) {
        console.log(event.target.value);
    }
    render() {
        return (
            <button className="btn btn-primary" onClick={this.buttonClick}>Submit</button>
        )

    }
}


class App extends React.Component {
    getNumber(event) {

        this.setState({ number: event.target.value });
    }


    oddEven() {
        if (this.state.number % 2 == 0) {
            alert(" Even")
        } else {
            alert("not Even");
        }
    }



    render() {

        return (

            <div className="container">

                <Input onChange={this.getNumber} />
                <Button onClick={this.oddEven} />
            </div>


        )


    }
}
ReactDOM.render(<App />, document.getElementById('root'));

import React from "react";
import ReactDOM from "react-dom";

class Input extends React.Component {
   inputChange(event)
   {
       console.log(event.target.value);
   }
    

    render() {
        return (
            <div>

                <input type="number" onChange={this.inputChange}></input>
                <br />
            </div>
        )

    }
}
class Button extends React.Component {
    buttonClick(event)
    {
        console.log(event.target.value);
    }
    render() {
        return (
            <button className="btn btn-primary" onClick={this.buttonClick}>Submit</button>
        )

    }
}


class App extends React.Component {
   

    
    render() {

        return (

            <div className="container">
               


                <Input  />
                <Button  />
            </div>


        )


    }
}
ReactDOM.render(<App />, document.getElementById('root'));

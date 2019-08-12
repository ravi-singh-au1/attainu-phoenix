import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';

import { Provider, connect } from 'react-redux';

/* 

    REDUX SECTION

 */

// Our reducer
let counterReducer = function (oldState, action) {

    let newState = { counter: 0 };

    // If empty state, initialize the state
    if (!oldState) { return newState; }

    // Perform INCREMENT action
    if (action.type == "INCREMENT") {
        newState.counter = oldState.counter + 1;
    }

    // Perform DECREMENT action
    if (action.type == "DECREMENT") {
        newState.counter = oldState.counter - 1;
    }

    // Perform RESET to zero
    if (action.type == "RESET") {
        newState.counter = 0;
    }

    return newState;

}


// Create a store from the reducer
let counterStore = createStore(counterReducer);


// Subscribe to changes in state
counterStore.subscribe(function () {
    console.log(counterStore.getState());
});

function counterStoreMapper(state) {
    return state;
}


/*

    REACT COMPONENTS
    
*/

class IncrementComponent extends React.Component {
    constructor(props) {
        super(props);

        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked() {
        this.props.dispatch({
            type: "INCREMENT"
        });
    }

    render() {
        return (
            <button onClick={this.buttonClicked}>+</button>
        );
    }
}
let Increment = connect(counterStoreMapper)(IncrementComponent);


class DecrementComponent extends React.Component {
    constructor(props) {
        super(props);

        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked() {
        this.props.dispatch({
            type: "DECREMENT"
        });
    }

    render() {
        return (
            <button onClick={this.buttonClicked}>-</button>
        );
    }
}
let Decrement = connect(counterStoreMapper)(DecrementComponent);


class ResetComponent extends React.Component {
    constructor(props) {
        super(props);

        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked() {
        this.props.dispatch({
            type: "RESET"
        });
    }

    


    render() {
        return (
            
            <button onClick={this.buttonClicked}>reset</button>
        
          );
    }
}

let Reset =connect(counterStoreMapper)(ResetComponent);




class DisplayComponent extends React.Component {
    render() {
        return (
            <h2>Counter: {this.props.counter}</h2>
        );
    }
}
let Display = connect(counterStoreMapper)(DisplayComponent);


class App extends React.Component {
    render() {
        return (
            <div>
                <Provider store={counterStore}>
                    <Display />
                    <Increment />
                    <Decrement />
                    <ResetComponent />
                </Provider>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("root"));
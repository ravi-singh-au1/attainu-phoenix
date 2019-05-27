import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (

      <Router>
        <div className="container-fluid">

          <div className="row">
            <div className="col-md-4 offset-md-4">
              <ul class="nav justify-content-center">
                <li class="nav-item">
                  <a class="nav-link active" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/contact">Contact Us</a>
                </li>


              </ul>
            </div>

          </div>

          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />


        </div>

      </Router>
    )
  }
}
class Home extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h2>AttainU Phoenix</h2>
          <p>we are AttainU Phoenix
            we are developer
</p>
        </div>


      </div>

    );
  }


}

class About extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h2>AttainU Phoenix</h2>
          <p>we are AttainU Phoenix
            we are developer
</p>
        </div>


      </div>

    );
  }


}


class Contact extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 offset-md-4">

          <p>AttainU Phoenix
            for hire please Contact Us
</p>
        </div>


      </div>

    );
  }


}


ReactDOM.render(<App />, document.getElementById('root'));


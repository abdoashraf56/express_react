import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    console.log("Hi")
   fetch("/users")
    .then(a => a.json())
    .then(data => {
      console.log(data)
    }).catch(error => {
      console.log(error)
    })
  }
 
  render() {
    return (
      <div>Iam one of famous actors</div>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);

import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(data => this.setState({ user: data.user }));
  }

  render() {
    return (
      <div className="App">
        <h1>User</h1>
        <div>{this.state.user}</div>
      </div>
    );
  }
}

export default App;

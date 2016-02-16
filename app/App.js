import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
  getInitialState() {
    return {
      text: '',
      clicked: false
    }
  },
  displayImage() {
    this.setState({
      clicked: !this.state.clicked
    })
  },
  onChange(e) {
    this.setState({
      text: e.target.value
    })
  },
  render() {
    return (
      <div className="text-center">
        <h1>{this.state.text}</h1>
        <br/>
        {this.state.clicked ? <img src="reactjs.png"/> : null}
        <br/>
        <br/>
        <input onKeyUp={this.onChange}/>
        <br/>
        <br/>
      <button onClick={this.displayImage} className="btn btn-primary">Click me</button>
      </div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));

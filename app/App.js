import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
  getInitialState() {
    return {
      text: ''
    }
  },
  onChange(e) {
    this.setState({
      text: e.target.value
    })
  },
    render() {
        return (
          <div>
            <h1>{this.state.text}</h1>
            <input onKeyUp={this.onChange}/>
          </div>
        )
    }
});

ReactDOM.render(<App />, document.getElementById('app'));

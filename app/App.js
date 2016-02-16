import React from 'react';
import ReactDOM from 'react-dom';
import Firebase from 'firebase';

const App = React.createClass({
  getInitialState() {
    return {
      text: '',
      chats: [],
      clicked: false
    }
  },
  componentWillMount() {
    this.firebaseRef = new Firebase('https://sjt-nerd.firebaseio.com/chats/');
    this.firebaseRef.on('child_added', function(snapshot) {
      this.setState({
        chats: this.state.chats.concat({
          key: snapshot.key(),
          val: snapshot.val()
        })
      });
    }.bind(this));
  },
  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  },
  handleSubmit(e) {
    if (e.keyCode === 13){
      if (e.target.value==='') {
        return;
      };
      this.firebaseRef.push({
        text: this.state.text
      });
      this.setState({
        text: ''
      })
      e.target.value = '';
    }
  },
  handleClick() {
    this.setState({
      clicked: !this.state.clicked
    })
  },
  render() {
    const styles = {
      uList: {
        listStyleType: 'none'
      }
    };
    const chatsList = this.state.chats.map((chat, index) => {
      return (
        <li style={styles.uList} key={index}>{chat.val.text}</li>
      )
    });
    return (
      <div className="container-fluid">
        <br/>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <h1>{chatsList}</h1>
          </div>
          <div className="col-md-3">
            {this.state.clicked ? <img src="reactjs.png"/> : null}
          </div>
          <div className="col-md-3"></div>
        </div>
        <br/>
        <div className="text-center">
          <input style={styles.inputStyle} onChange={this.handleChange} onKeyDown={this.handleSubmit}/>
          <button className="btn btn-primary" onClick={this.handleClick}>Click Me!</button>
        </div>
      </div>
    )
  }
});

ReactDOM.render(<App />, document.getElementById('app'));

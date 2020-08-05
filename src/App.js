import React from 'react';
import './App.css';
import CardList from './CardList'

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      userList: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(user => {
      this.setState({userList: user})
    })
  }

  render(){
    
    return(
      <div>
        <h1 className="tc f1">Friend-A-Dex</h1>
        <CardList userList={this.state.userList}/>
      </div>
    )
  }
}

export default App;

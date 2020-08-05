import React from 'react';
import './App.css';
import CardList from './CardList'
import Search from './Search'

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      userList: [],
      searchInput: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(user => {this.setState({userList: user})})
  }

  onSearch = (event) =>{
    this.setState({ searchInput: event.target.value })
  }

  render(){
    const filteredUsers = this.state.userList.filter(user =>{
      return user.username.toLowerCase().includes(this.state.searchInput.toLowerCase())
    })

    return(
      <div className="tc">
        <h1 className="f1">Friend-A-Dex</h1>
        <Search onSearch={this.onSearch}/>
        <CardList userList={filteredUsers}/>
      </div>
    )
  }
}

export default App;

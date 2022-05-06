import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import Profile from './profile';






class App extends Component {
  constructor(){
    super();
    this.state = {
      github: {
        url: "https://api.github.com/users",
        client_id: "4600991fba3208ae",
        client_secret: "7cf6b005ae5a7a970246166d52a9a0bd06f978c5",
        count: 7,
        sort: "created: asc"
      },
      user: [],
      repo: []
    }
  }

  getUser = (e) => {
    const user = e.target.value;
    const {url, client_id, client_secret, count, sort} = this.state.github;
      axios
        .get(
          `${url}/${user}?client_id=${client_id}?&client_secret=${client_secret}`
        )
        .then(({ data }) => this.setState({ user: data }));
        axios
        .get(
          `${url}/${user}/repos?per_page=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`
        )
        .then (({ data }) => this.setState({ repos: data }));
  };

  renderProfile = () => {
    const {user} = this.state;

    return (
      <div className='row'>
        <div className='col-md-4 mt-1'>
          <Profile user={user}/>
        
        </div>
      </div>
    )
  }

  render(){
    const {user} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
      
        <div className='container' style={{marginTop: '170px', marginBottom: '10px'}}>
          <div className='card card-body  p-2' style={{ marginRight: '64px', width: '1022px' }}>
            <h1>Pesquisa</h1>
            <p className='lead'>Digite o user de um usuário do GitHub</p>
            <input onChange={this.getUser} id='text' className='form-control' required/>
          </div>
          {this.state.user.length !== 0 ? this.renderProfile(): null}
        </div>
        <div className="Pe">
          <footer className="Pe-footer">
            <Footer/>
          </footer>
        </div>
      </div>

      

      
    );
  }
}
export default App;

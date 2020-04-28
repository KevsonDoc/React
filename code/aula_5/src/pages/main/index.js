import React, { Component } from 'react';
import api from '../../services/api';


export default class Main extends Component {
  state = {
    name: []
  };

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    const response = await api.get('/repos');
    console.log(response.data);
    this.setState({name: response.data});
  };

  render() {
    return (
      <div className="repository-list">
        {this.state.name.map(name => (
          <h2 key={name.id}>{name.name}</h2>
        ))}
      </div>
    );
  }
}
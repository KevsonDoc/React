import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';


export default class Main extends Component {
  state = {
    repositorios: []
  };

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    const response = await api.get('/repos');
    console.log(response.data);
    this.setState({repositorios: response.data});
  };

  render() {
    return (
      <div className="repository-list">
        {this.state.repositorios.map(repositorios => (
          <article key={repositorios.id}>
            <strong>{repositorios.name}</strong>
            <p>{repositorios.description}</p>
            <a href={repositorios.html_url}>Link for GitHub</a>
          </article>
        ))}
        <div className="actions">
          <button>Anterior</button>
          <button>Próximo</button>
        </div>
      </div>
    );
  }
}
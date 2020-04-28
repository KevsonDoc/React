import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';


export default class Main extends Component {
  state = {
    repositorios: [],

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
            <Link to={`/repos/${repositorios.id}`}>Link for GitHub</Link>
          </article>
        ))}
        <div className="actions">
          <button onClick={this.prevPaga}>Anterior</button>
          <button onClick={this.nextPage}>Próximo</button>
        </div>
      </div>
    );
  }
}
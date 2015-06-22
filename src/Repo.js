import React, { Component } from 'react';

export default class Repo extends Component {
  render() {
    return(
      <span>
        <dt>{this.props.repo.name}</dt>
        <dd>{this.props.repo.html_url}</dd>
      </span>    
    );
  }
}

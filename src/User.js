import React, { Component } from 'react';

export default class User extends Component {
  render() {
    return(
      <span>
        <dt>{this.props.user.login}</dt>
        <dd>{this.props.user.html_url}</dd>
      </span>    
    );
  }
}

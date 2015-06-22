import React, { Component } from 'react';

export default class User extends Component {
  render() {
    return(
      <span>
        <dt>{this.props.user.login}</dt>
        {/* <img src={this.props.user.avatar_url} width="64" /> */}
        <dd><a href={this.props.user.html_url}>{this.props.user.html_url}</a></dd>
      </span>    
    );
  }
}

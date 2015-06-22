import React, { Component } from 'react';
import User from './User';
import $ from 'jquery';

export default class UserList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    var users = this.props.users.map(function (user) {
        return (
            <User user={user} key={user.login}/>
        );
    });
    return (
        <div>
            User List
            {users}
        </div>
    );
  }
}

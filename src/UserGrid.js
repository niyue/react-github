import React, { Component } from 'react';
import User from './User';
import UserListCaption from './UserListCaption';
import $ from 'jquery';

module.exports = React.createClass({
  shouldComponentUpdate: function (nextProps, nextState) {
    console.log('action=should_user_grid_component_update users=%s', this.props.users.length);
    return true;
  },
  
  render: function() {
    var style = {
      display: 'inline'
    };
    var users = this.props.users.map(function (user) {
      var uid = `user-${user.login}`;
      return (
          <div style={style} key={user.login} id={uid}>
            <User user={user} />
          </div>
      );
    });
    var grid = [];
    for(var i = 0; i < users.length; i++) {
      grid.push(users[i]);
      if((i + 1) % 50 === 0) {
        grid.push(<br key={i}/>);
      }
    }
    return (
      <div>{grid}</div>
    );
  }
});

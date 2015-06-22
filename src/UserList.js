import React, { Component } from 'react';
import User from './User';
import $ from 'jquery';

export default class UserList extends Component {
  getInitialState() {
    return {data: []};
  }
  
  componentDidMount() {
    var url = 'https://api.github.com/search/users?q=location:Shanghai+repos:>=10';
    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.items});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  }
  
    render() {
    var data = this.state ? this.state.data : [];
        var users = data.map(function (user) {
            return (
                <User user={user} />
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

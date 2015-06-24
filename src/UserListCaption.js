import React, { Component } from 'react';
import $ from 'jquery';

export default class UserListCaption extends Component {
  constructor(props) {
    super(props);
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('action=should_user_list_caption_component_update');
    return false;
  }
  
  render() {
    return (
      <div class="user-list-caption">User List</div>
    );
  }
}

import React, { Component } from 'react';
import ComponentLifeCycleVisualizer from './component_lifecycle_visualizer'

module.exports = React.createClass({
  mixins: [ComponentLifeCycleVisualizer],
  shouldComponentUpdate: function(nextProps, nextState) {
    this._highlightChange('should_update');  
    console.log('action=should_user_component_update user=%s nextUser=%s', 
      this.props.user.login, nextProps.user.login);
    return false;
    //return this.props.user.login !== nextProps.user.login;
  },
  //<div class="user">
      //  <dt class="user-login">{this.props.user.login}</dt>
      //  {/* <img src={this.props.user.avatar_url} width="64" /> */}
      //   <dd class="user-url"><a href={this.props.user.html_url} class="user-url-link">{this.props.user.html_url}</a></dd>
      // </div>  
  render: function() {
    // var style = {
    //   'display': 'inline',
    //   'borderStyle': 'dotted',
    //   'borderWidth': '1px',
    //   'width': '10px',
    //   'backgroundColor': 'yellow'
    // };
    return(
      <div class="user">
       <dt class="user-login">{this.props.user.login}</dt>
       {/* <img src={this.props.user.avatar_url} width="64" /> */}
        <dd class="user-url"><a href={this.props.user.html_url} class="user-url-link">{this.props.user.html_url}</a></dd>
      </div>
    );
  }
});

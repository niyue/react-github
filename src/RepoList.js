import React, { Component } from 'react';
import Repo from './Repo';
import $ from 'jquery';

export default class RepoList extends Component {
  getInitialState() {
    return {data: []};
  }
  
  componentDidMount() {
    var url = 'https://api.github.com/orgs/facebook/repos';
    $.ajax({
      url: url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }.bind(this)
    });
  }
  
	render() {
    var data = this.state ? this.state.data : [];
		var repos = data.map(function (repo) {
			return (
				<Repo repo={repo} />
			);
		});
		return (
			<div>
				Repo List
				{repos}
			</div>
		);
	}
}

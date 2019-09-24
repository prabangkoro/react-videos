import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Youtube from '../apis/youtube'

export default class App extends Component {
  state = { videos: [] }

  onFormSubmit = async keyword => {
    const response = await Youtube.get('/search', {
      params: {
        q: keyword
      }
    })

    this.setState({ videos: response.data.items })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onFormSubmit} />
      </div>
    )
  }
}

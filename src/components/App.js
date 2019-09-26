import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

export default class App extends Component {
  state = { videos: [], selectedVideo: null }

  onVideoSelect = video => {
    this.setState({
      selectedVideo: video
    })
  }

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
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    )
  }
}

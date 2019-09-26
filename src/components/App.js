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
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

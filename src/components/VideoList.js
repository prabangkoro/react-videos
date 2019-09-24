import React, { Component } from 'react'
import VideoItem from './VideoItem'

export default class VideoList extends Component {
  renderVideoItems () {
    return this.props.videos.map(video => {
      return (
        <VideoItem
          key={video.etag}
          video={video}
        />
      )
    })
  }

  render() {
    return (
      <div className="ui relaxed divided list">
        {this.renderVideoItems()}
      </div>
    )
  }
}

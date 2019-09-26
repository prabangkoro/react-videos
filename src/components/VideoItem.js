import './VideoItem.css'
import React from 'react'

export default function VideoItem({ video, onVideoSelect }) {
  return (
    <div
      onClick={() => onVideoSelect(video)}
      className="item video-item"
    >
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      ></img>
      <div className="content">
        <div className="header">
          {video.snippet.title}
        </div>
      </div>
    </div>
  )
}

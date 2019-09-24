import axios from 'axios'

const KEY = 'AIzaSyAb9vFn8gt3HJemreQPMbe0ihHdbNv9H90'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
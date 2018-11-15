import axios from 'axios'
import { getVideoSuccess, getVideoFailure } from '../actions/video-actions'

async function getVideoRequestHandler (store, action) {
  // get data
  // dispatch success or failure action
  try {
    const videoRequest = await axios.get('http://localhost:9001/sample-video')
    store.dispatch(getVideoSuccess(videoRequest.data))
  } catch (error) {
    const message = error && error.response && error.response.data && error.response.data.message
      ? error.response.data.message
      : 'generic error message'
    store.dispatch(getVideoFailure(message))
  }
}

export default store => next => action => {
  const { type } = action
  switch (type) {
    case 'GET_VIDEO_REQUEST':
      getVideoRequestHandler(store, action)
      break
    default:
      break
  }
  next(action)
}

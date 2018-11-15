export const getVideoRequest = () => {
  return (dispatch) => {
    dispatch({
      type: 'GET_VIDEO_REQUEST',
    })
  }
}

export const getVideoSuccess = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_VIDEO_SUCCESS',
      payload: {
        data,
      }
    })
  }
}

export const getVideoFailure = (error) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_VIDEO_FAILURE',
      payload: {
        error,
      }
    })
  }
}

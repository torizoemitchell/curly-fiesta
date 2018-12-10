
const initialState = {
  processing: false,
  showingTeaser: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_VIDEO_REQUEST':
      return {
        ...state,
        processing: true,
      }
    case 'GET_VIDEO_SUCCESS':
      return {
        ...state,
        processing: false,
        data: action.payload.data,
        error: null,
      }
    case 'GET_VIDEO_FAILURE':
      return {
        ...state,
        processing: false,
        error: action.payload.error,
      }
    case 'TOGGLE_TEASER':
      return {
        ...state,
        showingTeaser: !state.showingTeaser
      }
    default:
      return state
  }
}

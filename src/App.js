import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getVideoRequest } from './actions/video-actions'
import './App.css'
import Tile from './components/tile.js'

class App extends Component {

  componentDidMount () {
    this.props.getVideoRequest()
  }

  render() {
    //this.props.video from state from mapStateToProps
    const { props } = this
    const { video = {} } = props
    const videoData = video && video.data
    const videoProcessing = video && video.processing
    const videoError = video && video.error

    console.log('App Render') // please leave this log statement
    console.log('VideoData: ', videoData)
    console.log("props", props)


    return (
      <div className="app">
        <header className="app__header">
          <h1 className="app__main-heading">{`Hello!  This is the <App /> component!  Please render your tile component in .app__body below`}</h1>
        </header>
        <div className="app__body">

          {videoData ? <Tile/> : "Loading..."}

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    video: state.video,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getVideoRequest: () => dispatch(getVideoRequest()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

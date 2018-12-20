import React from 'react'
import { connect } from 'react-redux'
import { toggleTeaser } from '../actions/video-actions'
import { Row, Button } from 'react-materialize'
import './tile.css'

class Tile extends React.Component{

  formatHrs = (totalSeconds) => {
    const hrs = Math.floor(((totalSeconds/60)/60))
    let sOrNoS = ''
    hrs === 1 ? sOrNoS = 'hr' : sOrNoS = 'hrs'
    return `${hrs} ${sOrNoS}`
  }

  formatMins = (totalSeconds) => {
    const mins = Math.floor(totalSeconds/60)%60
    let sOrNoS = ''
    mins === 1 ? sOrNoS = 'min' : sOrNoS = 'mins'
    return `${mins} ${sOrNoS}`
  }

  toggleTeaserCB = () =>{
    const { toggleTeaser } = this.props
    // toggleTeaser()
  }

  render(){
    const {
      tileArt,
      title,
      teaser,
      seriesName,
      seasonNum,
      episodeNum,
      durationSeconds,
    } = this.props.video.data
    const {showingTeaser} = this.props.video
    // console.log("this.props.video.data:", this.props.video.data)
    // console.log("this.props: ", this.props)
    return(
      <div className='tile container'>
        <div className='art'>
          <Row><img className='image' src={tileArt} alt="episode"/></Row>
        <div className='action-buttons'>
            <div>
              <Button floating waves='light' icon='play_arrow'/>
            </div>
            <div>
              <Button floating className='blue-grey darken-2' waves='light' icon='more_horiz' onClick={(e)=>{e.preventDefault(); this.props.toggleTeaser()}}
              />
            </div>
          </div>
        </div>
        <div className='info-section'>
          <Row className='series-name'><span>{seriesName}</span></Row>
          <Row><span>{title}</span></Row>
          {showingTeaser ? <Row><span>{teaser}</span></Row> : ''}
          <Row><span>S{seasonNum}:Ep{episodeNum} | {this.formatHrs(durationSeconds)} {this.formatMins(durationSeconds)}</span></Row>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  console.log("*** Tile::mapStateToProps(), state: ", state);
  return {
    video: state.video,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTeaser: () => dispatch(toggleTeaser()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tile);

import React from 'react'
import { connect } from 'react-redux'
import { toggleTeaser } from '../actions/video-actions'
import { Row, Button } from 'react-materialize'
import './tile.css'

export class Tile extends React.Component{

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

  render(){
    const {
      tileArt,
      title,
      teaser,
      seriesName,
      seasonNum,
      episodeNum,
      durationSeconds
    } = this.props.props
    console.log("this.props:", this.props)
    return(
      <div className='tile container'>
        <div className='art'>
          <Row><img className='image' src={tileArt} alt="episode"/></Row>
        <div className='action-buttons'>
            <div>
              <Button floating small waves='light' icon='play_arrow'/>
            </div>
            <div>
              <Button floating small className='blue-grey darken-2' waves='light' icon='more_horiz' onClick={this.props.toggleTeaser()}
              />
            </div>
          </div>
        </div>
        <div className='info-section'>
          <Row className='series-name'><span>{seriesName}</span></Row>
          <Row><span>{title}</span></Row>
          <Row><span>{teaser}</span></Row>
          <Row><span>S{seasonNum}:Ep{episodeNum} | {this.formatHrs(durationSeconds)} {this.formatMins(durationSeconds)}</span></Row>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    showingTeaser: state.showingTeaser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTeaser: () => dispatch(toggleTeaser()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tile);

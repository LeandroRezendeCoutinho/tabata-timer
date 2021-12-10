import React from 'react'
import MenuIcon from './MenuIcon'
import Reset from './Reset'
import Timer from './Timer'
import Title from './Title'

function Header(props) {
  return (
    <div className="header">
      <Title title={props.title}></Title>
      <div className="sub-header">
        <MenuIcon />
        <Timer className="timer-header" time={props.time}></Timer>
        <Reset></Reset>
      </div>
    </div>
  )
}

export default Header
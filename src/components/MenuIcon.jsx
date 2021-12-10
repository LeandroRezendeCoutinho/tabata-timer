import React from 'react'

function MenuIcon(props) {
  return (
    <div className="menu-icon" onclick={props.onClick}>
      <div className="menu-icon-slice"></div>
      <div className="menu-icon-slice"></div>
      <div className="menu-icon-slice"></div>
    </div>
  )
}

export default MenuIcon
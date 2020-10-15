import React, { useState, useEffect } from "react"

// import "./Header.css"
//inspiration: https://www.motocms.com/website-templates/pl/demo/53616.html

const menu = ["Menu", "Home", "O nas", "Przycisk"].map(name => (
  <button className="button-menu">{name}</button>
))

function Header() {
  const [hover, setHover] = React.useState(false)

  return (
    <div className="App-header">
      <div className="logo"> Cukiernia </div>
      <div className="menu-container">
        <div className="menu">
          {menu}
          <button
            className={`button-menu-JS ${hover ? "button-menu-hover" : null}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Przycisk
          </button>
          <button className="button-menu hamburger">
            <i class="fa fa-bars"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header

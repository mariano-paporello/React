import React from 'react'

export default function nav() {
  return (
    <div style={divStyle}> 
    <h1>E-commerce</h1>
    <ul style={ulStyle}>
  <li style={liStyle}><a style={aStyle} href="#Inicio">Inicio</a></li>
  <li style={liStyle}><a style={aStyle} href="#Productos">Productos</a></li>
  <li style={liStyle}><a style={aStyle} href="#Contactanos">Contactanos</a></li>
  <li style={liStyle}><a style={aStyle} href="#Sobre Nosotros">Sobre Nosotros</a></li>
</ul>
</div>
  )
}

let divStyle = {
  overflow: "hidden",
  backgroundColor: "#333",
}

let ulStyle = {
  listStyleType: "none",
  margin: 0,
  padding: 0,
  overflow: "hidden",
  backgroundColor: "#333",
}
let liStyle = {
  float: "left"
}
let aStyle = {
  display: "block",
  color: "white",
  textAlign: "center",
  padding: 14,
  textDecoration: "none",
}
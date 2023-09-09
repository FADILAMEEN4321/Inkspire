import React from 'react'

export default function Navbar() {
  
  return (
  <nav className="navbar navbar-expand-lg" style={{ background: "gold" }}>
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
  <h1 style={{ fontFamily: 'Lato', fontSize: '35px' }}>
    Inkspire.
    </h1>
        </a>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
    </div>
  </div>
</nav>  
  )
}

import React, { Fragment } from 'react'

function navbar() {
  return (
    <Fragment>
      <nav>
        <div>
            <a href="../html-pages/index.html" >
            TnC <span >Telecommunication</span></a>
            <button>
            <span></span>
            </button>
            <div>
                <div>
                    <a href="../html-pages/index.html">Home</a>
                    <a  href="../html.pages/service.html">Services</a>
                    <a href="../html.pages/administration.html">Administration</a>
                    <a href="../html.pages/blog.html">Blog</a>
                    <a href="../html.pages/about.html">About us</a>
                </div>
            </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default navbar


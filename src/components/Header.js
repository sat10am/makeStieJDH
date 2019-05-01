import React from 'react'

import Footer from './Footer'
import octocat from '../assets/images/octocat.png'
import Nav from './Nav'
class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={octocat} alt="" className="octocat" />
          </a>
          <h1>
            <strong>SAT 10 A.M.</strong>
            <br />
            Since from 2019.05.01.
            <Nav />
          </h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header

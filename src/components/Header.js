import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>SAT 10 A.M.</strong><br />
                    Since from 2019.05.01.<br />
                    Study notion: <a href="https://www.notion.so/SAT10AM-0a48ca7fee754baeb5a64979d499d07c">SAT10AM</a>.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header

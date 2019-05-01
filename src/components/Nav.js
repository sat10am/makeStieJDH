import React from 'react'

class Nav extends React.Component {
  render() {
    return (
      <div id="nav">
        <ul className="icons">
          <li>
            <a href="/">
              <span className="label">Home</span>
            </a>
          </li>
          {/* <li>
            <a href="/about">
              <span className="label">About</span>
            </a>
          </li>
          <li>
            <a href="/write">
              <span className="label">Write</span>
            </a>
          </li>
          <li>
            <a href="/contact">
              <span className="label">Contact</span>
            </a>
          </li> */}
          <li>
            <a
              href="https://www.notion.so/SAT10AM-0a48ca7fee754baeb5a64979d499d07c"
              target="_blank"
            >
              Our Notion
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav

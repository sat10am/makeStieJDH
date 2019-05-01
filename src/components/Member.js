import React, { Component } from 'react'

class Member extends Component {
  constructor() {
    super()
  }

  renderMember() {
    const { members } = this.props

    if (!members) return

    const member = members.map((obj, i) => {
      return (
        <article className="6u 12u$(xsmall) work-item" key={i}>
          <img src={obj.src} />
          <span>
            <a class="email-icon" href="mailto:{obj.email}" />
            <a
              class="fa fa-github github-icon-team-list"
              href="https://github.com/{obj.github}"
              target="_blank"
            />
          </span>
          <h3>{obj.name}</h3>
          <p>{obj.content}</p>
        </article>
      )
    })

    return <div className="row">{member}</div>
  }
  render() {
    return <div>{this.renderMember()}</div>
  }
}

export default Member

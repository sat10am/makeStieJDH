import React, { Component } from 'react'

class Member extends Component {
  constructor() {
    super()
  }

  renderMember() {
    const { members } = this.props

    if (!members) return

    const member = members.map((obj, i) => {
      const email = `mailto:${obj.email}`
      return (
        <article className="6u 12u$(xsmall) work-item" key={i}>
          <img src={obj.src} className="profile" />
          <span style={{ position: 'relative', top: '26px', left: '-26px' }}>
            <a class="icon fa-envelope-o" href={email} />
            <a
              class="fa fa-github github-icon-team-list"
              href={obj.github}
              target="_blank"
              style={{ position: 'relative', left: '5px' }}
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

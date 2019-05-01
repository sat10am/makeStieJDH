import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import Member from '../components/Member'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

import jaemin from '../assets/images/member/jaemin.jpg'
import Chany from '../assets/images/member/Chany.jpg'
import DoonDoon from '../assets/images/member/DoonDoon.jpeg'
import GODORI from '../assets/images/member/GODORI.png'
import jane from '../assets/images/member/jane.png'
import seungwoo from '../assets/images/member/seungwoo.png'
import wooddy from '../assets/images/member/wooddy.jpeg'
import huihwan from '../assets/images/member/huihwan.jpg'

const DEFAULT_IMAGES = [
  {
    id: '1',
    src: full01,
    thumbnail: thumb01,
    caption: 'Photo 1',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '2',
    src: full02,
    thumbnail: thumb02,
    caption: 'Photo 2',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '3',
    src: full03,
    thumbnail: thumb03,
    caption: 'Photo 3',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '4',
    src: full04,
    thumbnail: thumb04,
    caption: 'Photo 4',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '5',
    src: full05,
    thumbnail: thumb05,
    caption: 'Photo 5',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
  {
    id: '6',
    src: full06,
    thumbnail: thumb06,
    caption: 'Photo 6',
    description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.',
  },
]

const DEFAULT_MEMBERS = [
  {
    name: 'JAEMIN',
    content: '힘내겠습니다....',
    src: jaemin,
    email: '',
    github: 'https://github.com/2xel',
  },
  {
    name: 'Chany',
    content: 'Being awesome Front-end developer',
    src: Chany,
    email: '',
    github: 'dali',
  },
  {
    name: 'DoonDoon',
    content: '우리가 어떤 민족입니까?',
    src: DoonDoon,
    email: '',
    github: 'https://github.com/DoonDoony',
  },
  {
    name: 'GODORI',
    content: 'I love 🍺 & 🎮',
    src: GODORI,
    email: '',
    github: 'https://github.com/amorfati0310',
  },
  {
    name: 'wooddy',
    content: '🏃‍never stop learning 🏃',
    src: wooddy,
    email: '',
    github: 'https://github.com/jwooss',
  },
  {
    name: 'seungwoo',
    content: 'Dream. The supreme master of Front-End developer with Back-End',
    src: seungwoo,
    email: '',
    github: 'https://github.com/seungwoohong',
  },
  {
    name: 'huihwan',
    content: '이제 5g 시대다',
    src: huihwan,
    email: '',
    github: '',
  },
  {
    name: 'yesdoing',
    content: '응 하고있어',
    src: jane,
    email: '',
    github: 'https://github.com/Yesdoing',
  },
]

class HomeIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
  }

  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }

  render() {
    const siteTitle = 'Gatsby Starter - Strata'
    const siteDescription = 'Site description'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h2>
                SAT 10 A.M. for JS
                <br />
                안녕하세요. Java Script 스터디입니다.
              </h2>
            </header>
            <ul className="actions">
              <li>
                <a href="https://github.com/sat10am" className="button">
                  Github LINK
                </a>
              </li>
            </ul>
          </section>

          <section id="two">
            <h2>Recent Work</h2>

            <Gallery
              images={DEFAULT_IMAGES.map(
                ({ id, src, thumbnail, caption, description }) => ({
                  src,
                  thumbnail,
                  caption,
                  description,
                })
              )}
            />

            <ul className="actions">
              <li>
                <a href="#" className="button">
                  Full Portfolio
                </a>
              </li>
            </ul>
          </section>

          <section id="three">
            <h2>Member</h2>

            <Member
              members={DEFAULT_MEMBERS.map(
                ({ name, content, src, email, github }) => ({
                  name,
                  content,
                  src,
                  email,
                  github,
                })
              )}
            />
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex

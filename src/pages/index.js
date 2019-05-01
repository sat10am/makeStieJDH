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
import SeongYeob from '../assets/images/member/SeongYeob.png'

const DEFAULT_IMAGES = [
  {
    id: '1',
    src: full01,
    thumbnail: thumb01,
    caption: '51 Labors Hackathon 1',
    description:
      '피자를 먹느라 정신이 팔려 아무도 카메라를 쳐다보지 않는 우리들 ^^.',
  },
  {
    id: '2',
    src: full02,
    thumbnail: thumb02,
    caption: '51 Labors Hackathon 2',
    description:
      '피자를 먹느라 정신이 팔려 아무도 카메라를 쳐다보지 않는 우리들 ^^.',
  },
  {
    id: '3',
    src: full03,
    thumbnail: thumb03,
    caption: '51 Labors Hackathon 3',
    description: '다이어트를 해야해서 아무것도 못먹고 있는 JAEMIN님.',
  },
  {
    id: '4',
    src: full04,
    thumbnail: thumb04,
    caption: '51 Labors Hackathon 4',
    description: '대장님은 세팅중.',
  },
  {
    id: '5',
    src: full05,
    thumbnail: thumb05,
    caption: '51 Labors Hackathon 5',
    description: '해커톤 장소 넓고 좋아요. 하지만 와이파이는 느려요.',
  },
  {
    id: '6',
    src: full06,
    thumbnail: thumb06,
    caption: '51 Labors Hackathon 6',
    description:
      'YO YesDoing 넌 잘생겼고 프로그래밍도 잘하고 그리고.. 인생의 진리지..',
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
    content: '나에게 맞는 프리랜서 중개 사이트는? 위시캣!',
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
    content: '저는 술과 게임을 좋아합니다.',
    src: GODORI,
    email: '',
    github: 'https://github.com/amorfati0310',
  },
  {
    name: 'wooddy',
    content: 'nAver stop learning(네이버는 배우는걸 멈춰라)',
    src: wooddy,
    email: '',
    github: 'https://github.com/jwooss',
  },
  {
    name: 'seungwoo',
    content: '저는 앵귤러 1,2,3,4,5,6,7,8,9,10 다 잘합니다.',
    src: seungwoo,
    email: '',
    github: 'https://github.com/seungwoohong',
  },
  {
    name: 'huihwan',
    content: '이제 5G 시대다',
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
  {
    name: 'SeongYeob',
    content: '저는 한국 최고의 리엑트 마스터 입니다.',
    src: SeongYeob,
    email: '',
    github: 'https://github.com/ubitoffee',
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
  componentDidMount() {
    var slides = ['10AM', 'CREATE', ''],
      i = 1
    var next = 0
    setTimeout(function() {
      var cap = setInterval(function() {
        next++
        i++
        document.getElementById('bump-swap').innerHTML = slides[next]
        if (i == slides.length) {
          //All the words are displayed clear interval
          clearInterval(cap)
        }
      }, 1750)
    }, 900)
  }

  render() {
    const siteTitle = 'SAT10AM'
    const siteDescription = 'SAT10AM BLOG'

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <div className="bump">
                <div className="bump-half">SAT</div>
                <div className="bump-half bump-slide">
                  <div className="bump-half-item" id="bump-swap">
                    <span className="yellow">10AM</span>
                  </div>
                  <div className="bump-half-here">10AM LOVE CODING</div>
                </div>
              </div>
              <div className="github-link-container">
                <a
                  href="https://github.com/sat10am"
                  className="icon fa-github big-size"
                >
                  <span className="label">Github</span>
                </a>
              </div>
            </header>
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

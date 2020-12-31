import React, { useState, Fragment } from 'react'
import Footer from '../Footer/Footer.js'
import Carousel from 'react-bootstrap/Carousel'
import study3 from './HomeImages/study3.jpg'
import study4 from './HomeImages/study4.jpg'
import study5 from './HomeImages/study5.jpg'
import styles from './Home.css'
// import Layout from '../shared/Layout/Layout'

// image source isn't recognizing path to image in file
// commented out below is a previous (incorrect) carousel skeleton that
// contains live links of the images

// wanted to wrap carousel in bootstrap container and row with a new row underneath to enter content

function HomeCarousel () {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <Fragment>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={study4}
            alt="First slide"
            style={{ maxHeight: '625px' }}
          />
          <Carousel.Caption>
            <div className={styles.carouselTextDiv}>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
              <p>Donec cursus magna id lorem pharetra dignissim. Aenean iaculis luctus facilisis. Donec sollicitudin augue non ante lobortis, eget dictum leo tempor.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={study3}
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className={styles.carouselTextDiv}>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
              <p>Donec cursus magna id lorem pharetra dignissim. Aenean iaculis luctus facilisis. Donec sollicitudin augue non ante lobortis, eget dictum leo tempor.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={study5}
            alt="Third slide"
            style={{ maxHeight: '625px' }}
          />
          <Carousel.Caption>
            <div className={styles.carouselTextDiv}>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
              <p>Donec cursus magna id lorem pharetra dignissim. Aenean iaculis luctus facilisis. Donec sollicitudin augue non ante lobortis, eget dictum leo tempor.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Footer />
    </Fragment>
  )
}

export default HomeCarousel

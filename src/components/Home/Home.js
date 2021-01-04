import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import study3 from './HomeImages/study3.jpg'
import study4 from './HomeImages/study4.jpg'
import study5 from './HomeImages/study5.jpg'
import styles from './Home.css'
import Layout from '../Layout/Layout'

function HomeCarousel () {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  return (
    <Layout>
      <Carousel className={styles.carousel} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={study4}
            alt="First slide"
            style={{ maxHeight: '625px' }}
          />
          <Carousel.Caption>
            <div className={styles.carouselTextDiv}>
              <h3>Preparing for an interview or exam?</h3>
              <p>Use the flashcards from these question sets to review material sourced from common technical interview questions.</p>
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
              <h3>Want to add a new topic?</h3>
              <p>The ability to add your own questions from this page will be coming soon! If you&apos;d like to have us add something now, please reach out to us! We are happy to collaborate and add new material to help others reach their goals!</p>
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
              <h3>Corrections or Further Clarifications? </h3>
              <p>Please reach out to us if you&apos;d like to edit a question or an answer - we are all on different stages of our learning journey and we move faster and farther when we go together!</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Layout>
  )
}

export default HomeCarousel

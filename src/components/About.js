import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {
  return (
    <div
      className='About'
      style={{ backgroundColor: 'black', color: 'white', padding: '50px 0' }}
    >
      <Container>
        <Row>
          <Col md={6}>
            <h1>About US</h1>
            <p>
              Lorem ipsum dolor sit amet. Et velit eius eos nesciunt doloribus
              aut natus ipsa in error omnis. Id ducimus voluptatem sed nobis
              velit aut nemo eius et inventore quia cum corporis assumenda. In
              voluptatem voluptas et laborum nobis aut provident quasi aut culpa
              autem qui dolore itaque quo explicabo odio quo excepturi
              voluptatem. Id laborum neque sit laboriosam Quis sit doloremque
              ratione sit consequatur voluptatem nam recusandae quas et quas
              fugiat.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About

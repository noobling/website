import React from 'react'
import { Row, Col } from 'reactstrap'
import { randomise } from 'helpers/array'
import sponsors from 'data/sponsors.json'

const sponsorsSample = sponsors
  .sort(randomise)
  .slice(0, Math.min(3, sponsors.length))

const Sponsors = () => (
  <Row className='justify-content-around py-5'>
    {sponsorsSample.map(sponsor => (
      <Col
        xs={3}
        md={2}
        key={sponsor.name}
        className='d-flex align-items-center m-0 justify-content-center'
      >
        <img src={sponsor.logo} alt={sponsor.name} className='img-fluid logo' />
      </Col>
    ))}
  </Row>
)

export default React.memo(Sponsors)

import { Card, Col } from 'react-bootstrap';

const CardStat = ({ field, indicators }) => {

  const value = indicators.filter(e => e.name === field.name).map(e => e.value).reduce((prev, curr) => prev + curr, 0)

  return (
    <Col>
      <Card>
        <div className="d-flex align-items-center flex-grow-1 text-center">
          <Card.Body>
            <Card.Title>
            <h1>{value}</h1>
              <p>{field.name}</p>
            </Card.Title>
          </Card.Body>
        </div>
      </Card>
    </Col>
  )
}

export default CardStat

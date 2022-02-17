import { Card } from 'react-bootstrap';

const CardStat = ({ field, indicators }) => {

  return (
      <Card>
        <div className="d-flex align-items-center flex-grow-1 text-center">
          <Card.Body>
            <Card.Title>
            <h1>{indicators.filter(e => e.name === field.name).map(e => e.value).reduce((prev, curr) => prev + curr, 0)}</h1>
              <p>{field.name}</p>
            </Card.Title>
          </Card.Body>
        </div>
      </Card>
  )
}

export default CardStat

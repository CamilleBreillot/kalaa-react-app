import { Card, Row } from 'react-bootstrap';
import CardStat from './CardStat'

const Statistics = ({ collects, selectedFields, indicators }) => {
  const sum = collects.length
  const maybePluralize = (count, noun, suffix = 's') =>
    `${noun}${count !== 1 ? suffix : ''}`;

  return (
    <div>
      <div style={{ width: '400px', display: 'flex', marginLeft: '420px', marginBottom: '10px'}}>
        <Card>
        <Card.Img variant="top" src="https://i-df.unimedias.fr/2018/11/28/banques_alimentaires-collecte_nationale.jpg" />
        <Card.Body>
          <Card.Title>
            <div className='text-center'>
              <h1>{sum}</h1>
              <p>{maybePluralize(sum, 'Collecte')} {maybePluralize(sum, 'déclarée')} </p>
            </div>
          </Card.Title>
        </Card.Body>
      </Card>
      </div>
      <Row xs={2} md={3} className="g-4">
        {selectedFields.map((field) => (
          <CardStat
            key={field.id}
            field={field}
            indicators={indicators}/>
        ))}
      </Row>
    </div>
  )
}

export default Statistics

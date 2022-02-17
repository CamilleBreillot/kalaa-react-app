import { CardGroup, Card } from 'react-bootstrap';
import CardStat from './CardStat'

const Statistics = ({ collects, selectedFields, indicators }) => {


  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="https://i-df.unimedias.fr/2018/11/28/banques_alimentaires-collecte_nationale.jpg" />
          <Card.Body>
            <Card.Title>
              <div className='text-center'>
                <h1>{collects.length}</h1>
                <p>Collectes déclarées</p>
              </div>
            </Card.Title>
          </Card.Body>
        </Card>
        {selectedFields.map((field) => (
          <CardStat
            key={field.id}
            field={field}
            indicators={indicators}/>
        ))}
      </CardGroup>
    </div>
  )
}

export default Statistics

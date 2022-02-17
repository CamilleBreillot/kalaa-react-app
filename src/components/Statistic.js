import { CardGroup, Card } from 'react-bootstrap';
import CardStat from './CardStat'

const Statistics = ({ collects, selectedFields, indicators }) => {
  // const weight = indicators.filter(e => e.name === "Poids des denrées").map(e => e.value).reduce((prev, curr) => prev + curr, 0);
  // const participants = indicators.filter(e => e.name === "Nb de participants").map(e => e.value).reduce((prev, curr) => prev + curr, 0);
  // const price = indicators.filter(e => e.name === "Valeur des lots").map(e => e.value).reduce((prev, curr) => prev + curr, 0);

  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="https://i-df.unimedias.fr/2018/11/28/banques_alimentaires-collecte_nationale.jpg" />
          <Card.Body>
            <Card.Title>
              <div className='text-center'>
                <h1>{collects.length}</h1>
                <p>collectes déclarées</p>
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

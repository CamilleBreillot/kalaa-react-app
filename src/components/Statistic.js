import { CardGroup, Card } from 'react-bootstrap';

const Statistics = ({ collects, indicators }) => {
  const weight = indicators.filter(e => e.name === "Poids des denrées").map(e => e.value).reduce((prev, curr) => prev + curr, 0);
  const participants = indicators.filter(e => e.name === "Nb de participants").map(e => e.value).reduce((prev, curr) => prev + curr, 0);

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

          <Card>
            <div className="d-flex align-items-center flex-grow-1 text-center">
              <Card.Body>
                <Card.Title>
                    <h1>{weight}</h1>
                    <p>poids (kg) des denrées collectées</p>
                </Card.Title>
              </Card.Body>
            </div>
          </Card>
        <Card>
          <div className="d-flex align-items-center flex-grow-1 text-center">
            <Card.Body>
              <Card.Title>
                <h1>{participants}</h1>
                <p>participants aux collectes</p>
              </Card.Title>
            </Card.Body>
          </div>
        </Card>
      </CardGroup>
    </div>
  )
}

export default Statistics

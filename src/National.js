import Subheader from './components/Subheader'
import CollectList from './components/CollectList'
import FieldList from './components/FieldList'
import Statistics from './components/Statistic'
import IndicatorForm from './components/IndicatorForm'
import Header from './components/Header'

const National = ({ collects, onDelete, indicators, selectedFields, addField, deleteField }) => {
  return (
    <div>
      <Header title={'Reporting Adoba'} text={'Bienvenue sur votre espace de reporting RSE'} />
      <Statistics collects={collects} selectedFields={selectedFields} indicators={indicators}/>
      <Subheader title={"Indicateurs"} text={"Paramétrer les indicateurs à remonter"}/>
      <div className="field-container">
          <FieldList selectedFields={selectedFields} deleteField={deleteField} />
          <IndicatorForm selectedFields={selectedFields} addField={addField} />
      </div>
      <Subheader title={"Collectes réalisées"} text={"Retrouver le détail des collectes réalisées par le magasin Adoba"}/>
      <div>
        <CollectList collects={collects} onDelete={onDelete} />
      </div>
    </div>
  )
}

export default National

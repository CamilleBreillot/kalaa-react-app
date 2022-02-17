import Subheader from './components/Subheader'
import CollectList from './components/CollectList'
import FieldList from './components/FieldList'
import Statistics from './components/Statistic'
import IndicatorForm from './components/IndicatorForm'

const National = ({ collects, onDelete, indicators, selectedFields, addField, deleteField }) => {
  return (
    <div>
      <Statistics collects={collects} selectedFields={selectedFields} indicators={indicators}/>
      <Subheader title={"Indicateurs"} text={"Paramétrer les indicateurs à remonter"}/>
      <div className="field-container">
          {selectedFields.length > 0 ? <FieldList selectedFields={selectedFields}
            deleteField={deleteField} /> : 'No indicators set yet'}
          <IndicatorForm selectedFields={selectedFields} addField={addField} />
      </div>
      <Subheader title={"Collectes réalisées"} text={"Retrouver le détail des collectes réalisées par le magasin"}/>
      <div>
        {collects.length > 0 ? <CollectList collects={collects}
          onDelete={onDelete} /> : 'No collects yet'}
      </div>
    </div>
  )
}

export default National

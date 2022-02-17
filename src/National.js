import CollectList from './components/CollectList'
import Statistics from './components/Statistic'
import IndicatorForm from './components/IndicatorForm'

const National = ({ collects, onDelete, indicators, selectedFields, addField }) => {
  return (
    <div>
      <Statistics collects={collects} indicators={indicators}/>
      <IndicatorForm selectedFields={selectedFields} addField={addField}/>

      <div>
        {collects.length > 0 ? <CollectList collects={collects}
          onDelete={onDelete} /> : 'No collects yet'}
      </div>
    </div>
  )
}

export default National

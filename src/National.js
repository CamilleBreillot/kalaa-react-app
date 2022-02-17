import CollectList from './components/CollectList'
import FieldList from './components/FieldList'
import Statistics from './components/Statistic'
import IndicatorForm from './components/IndicatorForm'

const National = ({ collects, onDelete, indicators, selectedFields, addField, deleteField }) => {
  return (
    <div>
      <Statistics collects={collects} indicators={indicators}/>
      <div className="field-container">
        <div>
          {selectedFields.length > 0 ? <FieldList selectedFields={selectedFields}
            deleteField={deleteField} /> : 'No indicators set yet'}
        </div>
        <IndicatorForm selectedFields={selectedFields} addField={addField} />
      </div>
      {/* <div>
        {collects.length > 0 ? <CollectList collects={collects}
          onDelete={onDelete} /> : 'No collects yet'}
      </div> */}
    </div>
  )
}

export default National

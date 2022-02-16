import CollectList from './components/CollectList'
import CollectForm from './components/CollectForm'

const Store = ({ collects, onDelete, onAdd, selectedIndicators }) => {
  return (
    <div>
      <div className="collect-container">
        {collects.length > 0 ? <CollectList collects={collects}
          onDelete={onDelete} /> : 'No collects yet'}
        <CollectForm onAdd={onAdd} selectedIndicators={selectedIndicators} />
      </div>
    </div>
  )
}

export default Store

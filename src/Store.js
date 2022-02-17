import CollectList from './components/CollectList'
import CollectForm from './components/CollectForm'

const Store = ({ collects, onDelete, onAdd, selectedFields }) => {
  return (
    <div>
      <div className="collect-container">
        {collects.length > 0 ? <CollectList collects={collects}
          onDelete={onDelete} /> : 'No collects yet'}
        <CollectForm onAdd={onAdd} selectedFields={selectedFields} />
      </div>
    </div>
  )
}

export default Store

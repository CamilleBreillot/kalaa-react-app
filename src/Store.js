import CollectList from './components/CollectList'
import CollectForm from './components/CollectForm'
import Header from './components/Header'

const Store = ({ collects, onDelete, onAdd, selectedFields }) => {
  return (
    <div>
      <Header title={'Magasin Adoba'} text={'Bienvenue sur votre espace'}/>
      <div className="collect-container">
        {collects.length > 0 ? <CollectList collects={collects}
          onDelete={onDelete} /> : 'No collects yet'}
        <CollectForm onAdd={onAdd} selectedFields={selectedFields} />
      </div>
    </div>
  )
}

export default Store

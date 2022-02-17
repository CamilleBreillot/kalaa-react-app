import Field from './Field'

const FieldList = ({ selectedFields, deleteField}) => {

  return (
    <div className='field-list-section'>
      <h5 className='text-center mb-3'>Liste des indicateurs à date</h5>
      {selectedFields.map((field) => (
        <Field
          key={field.name}
          field={field}
          deleteField={deleteField} />
      ))}
    </div>
  )
}

export default FieldList

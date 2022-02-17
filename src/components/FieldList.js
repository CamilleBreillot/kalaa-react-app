import Field from './Field'

const FieldList = ({ selectedFields, deleteField}) => {

  return (
    <div className='collect-lists-section'>
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

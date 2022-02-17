import { Card, CardContent, Grid, Button } from '@material-ui/core';
import { Form, Formik, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { object, string } from 'yup'
import React from 'react';


const IndicatorForm = ({ addField }) => {

  return (
    <div className='field-list-section'>
      <h5 className='text-center mb-3'>Ajouter un indicateur à suivre</h5>
      <Card>
        <CardContent>
          <Formik
            // enableReinitialize={true}
            initialValues={{
              name: '',
            }}
            validationSchema={object({
              name: string().required("Le nom de l'indicateur est obligatoire")
            })}
            onSubmit={async (values) => {
              values.value = 0
              await addField(values)
            }}>
            {({ values, errors, isSubmitting }) => (
              <Form autoComplete='off'>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <Field
                      fullWidth
                      name="name"
                      component={TextField}
                      label="Nom de l'indicateur"
                    />
                  </Grid>

                  <Grid item>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      {isSubmitting ? 'Ajout en cours' : 'Ajouter'}</Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
}

export default IndicatorForm




















// import { useState } from 'react'

// const IndicatorForm = ({ addField }) => {
//   const [field, setField ] = useState({
//     name: '',
//     value: 0,
//   })

//   const onSubmit = (e) => {
//     e.preventDefault()
//     addField({ field })

//     setField('')
//   }

//   return (
//     <form className='add-form' onSubmit={onSubmit}>
//       <div className='form-control'>
//         <label>Name</label>
//         <input type='text' placeholder='Add name' value={field.name}
//         onChange={(e) => setField(e.target.value)}/>
//       </div>
//       <input type='submit' value='Save Indicator' className='btn btn-block'></input>
//     </form>
//   )
// }

// export default IndicatorForm

import { Card, CardContent, Grid, Button, CircularProgress, Typography, makeStyles } from '@material-ui/core';
import { Form, Formik, Field, FieldArray } from 'formik';
import { TextField } from 'formik-material-ui';
import React from 'react';
import { useState, useEffect } from 'react'

const useStyles = makeStyles((theme) => ({
  errorColor: {
    color: theme.palette.error.main,
  },
  stretch: {
    flexGrow:  1
  },
  noWrap: {
    [theme.breakpoints.up('sm')]: {
      flexWrap: 'nowrap',
    },
  },
}));

const CollectForm = ({ onAdd, selectedFields }) => {
  const classes = useStyles();
  const [test, settest] = useState([])

  useEffect(() => {
    settest(selectedFields)
  }, [selectedFields])
  const result = test.map(e => ({ name: e.name, value: e.value }))

  return (
    <div className='collect-form-section'>
      <h5 className='text-center mb-3'>Déclarer une nouvelle collecte</h5>
      <Card>
        <CardContent>
          <Formik
            enableReinitialize={true}
            initialValues={{
            name: '',
            asso: '',
            date: '',
            indicators_attributes: result,
          }}
          onSubmit={(values) => {
            onAdd(values)
          }}>
            {({ values, errors, isSubmitting }) => (
              <Form autoComplete='off'>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <Field
                      fullWidth
                      name="name"
                      component={TextField}
                      label="Nom de la collecte"
                    />
                  </Grid>
                  <Grid item>
                    <Field
                      fullWidth
                      name="asso"
                      component={TextField}
                      label="Association partenaire"
                    />
                  </Grid>
                  <Grid item>
                    <Field
                      name="date"
                      type='date'
                    />
                  </Grid>

                  <FieldArray name="indicators_attributes">
                    {({push, remove}) => (
                      <React.Fragment>
                        <Grid item>
                          <Typography variant="body1">Indicateurs à renseigner</Typography>
                        </Grid>

                        {values.indicators_attributes.map((_, index) => (
                          <Grid container item key={index} spacing={2}>
                            <Grid item className={classes.stretch}>
                              <Field
                                fullWidth
                                name={`indicators_attributes[${index}].name`}
                                component={TextField}
                                label="Indicateur"
                                disabled={true}
                              />
                            </Grid>
                            <Grid item className={classes.stretch}>
                              <Field
                                fullWidth
                                name={`indicators_attributes[${index}].value`}
                                component={TextField}
                                type="number"
                                label="Valeur"
                              />
                            </Grid>
                          </Grid>
                        ))}
                      </React.Fragment>
                    )}


                  </FieldArray>

                  <Grid item>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      startIcon={
                        isSubmitting ? (
                          <CircularProgress size="0.9rem" />
                        ) : undefined
                      }
                      >
                      {isSubmitting ? 'Déclaration en cours' : 'Déclarer'}</Button>
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

export default CollectForm



















// import { useState } from 'react'

// const Form = ({ onAdd }) => {
//   const [collect, setCollect ] = useState({
//     name: '',
//     asso: '',
//     date: '',
//     indicators: [
//       {
//         name:'Denrées collectées',
//         value: ''
//       },
//       {
//         name: 'Participants',
//         value: ''
//       },
//     ]
//   })

//   const onSubmit = (e) => {
//     e.preventDefault()

//     // if (!name || !asso || !date) {
//     //   alert('Please fill all fields')
//     // }
//     onAdd({ collect })

//     setCollect('')
//   }

//   return (
//     <form className='add-form' onSubmit={onSubmit}>
//       <div className='form-control'>
//         <label>Name</label>
//         <input type='text' placeholder='Add name' value={collect.name}
//         onChange={(e) => setName(e.target.value)}/>
//       </div>
//       <div className='form-control'>
//         <label>Association</label>
//         <input type='text' placeholder='Add association' value={asso}
//           onChange={(e) => setAsso(e.target.value)} />
//       </div>
//       <div className='form-control'>
//         <label>Date</label>
//         <input type='date' value={date}
//           onChange={(e) => setDate(e.target.value)} />
//       </div>
//       <input type='submit' value='Save Collect' className='btn btn-block'></input>
//     </form>
//   )
// }

// export default Form

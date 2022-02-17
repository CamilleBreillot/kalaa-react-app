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
  console.log(test)

  return (
    <div className='form-section'>
    <Card>
      <CardContent>
        <Formik
          enableReinitialize={true}
          initialValues={{
          name: '',
          asso: '',
          date: '',
          indicators_attributes: test,
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
                    label="name"
                  />
                </Grid>
                <Grid item>
                  <Field
                    fullWidth
                    name="asso"
                    component={TextField}
                    label="asso"
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
                         <Typography variant="body2">Indicators to fill</Typography>
                       </Grid>

                      {values.indicators_attributes.map((_, index) => (
                        <Grid container item key={index} spacing={2}>
                          <Grid item className={classes.stretch}>
                            <Field
                              fullWidth
                              name={`indicators_attributes[${index}].name`}
                              component={TextField}
                              label="indicator"
                              disabled={true}
                            />
                          </Grid>
                          <Grid item className={classes.stretch}>
                            <Field
                              fullWidth
                              name={`indicators_attributes[${index}].value`}
                              component={TextField}
                              type="number"
                              label="Value"
                            />
                          <Grid item>
                            <Button onClick={() => remove(index)}>Delete</Button>
                          </Grid>
                          </Grid>
                        </Grid>
                      ))}

                      <Grid item>
                        <Button
                          variant="contained"
                          onClick={() => push({name:"", value: 0})}>Add</Button>
                      </Grid>
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
                    {isSubmitting ? 'Submitting' : 'Submit'}</Button>
                </Grid>

              </Grid>

              <pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
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

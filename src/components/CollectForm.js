import { Card, CardContent, Grid, Button, CircularProgress, Typography, makeStyles } from '@material-ui/core';
import { Form, Formik, Field, FieldArray } from 'formik';
import { TextField } from 'formik-material-ui';
import React from 'react';
import { useState, useEffect } from 'react'
import { object, number, string, date, array } from 'yup'

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
          validationSchema={object({
            name: string().required('Le nom de la collecte est obligatoire'),
            asso: string().required("L'association partenaire est obligatoire"),
            date: date().required('La date est obligatoire'),
            indicators_attributes: array(object({
              value: number().required("Obligatoire")
            }))
          })}
          onSubmit={async (values) => {
            await onAdd(values)
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

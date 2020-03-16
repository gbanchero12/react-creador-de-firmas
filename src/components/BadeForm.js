import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  button:{
    margin: theme.spacing(1),
    width: 200,
    height: 45,
  }
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      
     
        <TextField
        id="standard-full-width"
        margin="normal"
        name="nombre"
        className="nombre"
          label="Nombre"
          defaultValue=""
          variant="outlined"
          
        />
        <TextField
          name="apellido"
          className="apellido"
          label="Apellido"
          defaultValue=""
          variant="outlined"
          
        />
         <TextField
          name="posicion"
          className="posicion"
          label="Posicion"
          defaultValue=""
          variant="outlined"
          
        />
         <TextField
          name="telefono"
          className="telefono"
          label="Telefono"
          defaultValue=""
          variant="outlined"
          
        />
          <TextField
          name="email"
          className="email"
          label="Email"
          defaultValue=""
          variant="outlined"
          
        />
       
         <Button className={classes.button} variant="contained" color="primary" m={4}>
        Guardar
      </Button>

        
        
    
    </div>
  );
}
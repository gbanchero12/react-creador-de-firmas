import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root}>
      
      <div>
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
        

        
        
      </div>
    </form>
  );
}
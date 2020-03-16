import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import '../components/styles/badge.css'

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    button: {
        margin: theme.spacing(1),
        width: 200,
        height: 45,
        alignItemsAndJustifyContent: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
    }
}));




function FormPropsTextFields() {
    const classes = useStyles();

    const handleChange = (evento)=>{
        console.log({value: evento.target.value});
    }


    return (
        <div className="Badge">
            <div className={classes.root} >

                <h1>Nueva firma: </h1>
                <TextField
                    onChange={handleChange}
                    margin="normal"
                    name="nombre"
                    className="nombre"
                    label="Nombre"
                    defaultValue=""
                    variant="outlined"

                />
                <TextField
                    onChange={handleChange}
                    name="apellido"
                    className="apellido"
                    label="Apellido"
                    defaultValue=""
                    variant="outlined"

                />
                <TextField
                    onChange={handleChange}
                    name="posicion"
                    className="posicion"
                    label="Posicion"
                    defaultValue=""
                    variant="outlined"

                />
                <TextField
                    onChange={handleChange}
                    name="telefono"
                    className="telefono"
                    label="Telefono"
                    defaultValue=""
                    variant="outlined"

                />
                <TextField
                    onChange={handleChange}
                    name="email"
                    className="email"
                    label="Email"
                    defaultValue=""
                    variant="outlined"

                />

                <Grid item />
                <Grid item />

                <Button className={classes.button} variant="contained" color="primary">
                    Guardar
      </Button>



            </div>
        </div>
    );
}


export default FormPropsTextFields;
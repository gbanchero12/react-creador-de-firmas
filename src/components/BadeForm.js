import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import '../components/styles/badge.css'




class FormPropsTextFields extends React.Component {

    classes = makeStyles(theme => ({
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
            
        }
    }));
    


    handleChange = evento => {
        //con esto veo el input que relleno y el valor asignado!
        /*console.log({
            value: evento.target.value,
            name: evento.target.name
        });*/
    
       /*this.setState({
            [evento.target.name] : [evento.taret.value],
        });*/
        
    }

    handleClick = evento => {
        console.log("click");
    }


    render(){
    return (
        <div className="Badge">
            <div className={this.classes.root} >

                <h1>Nueva firma: </h1>
                <TextField
                    onChange={this.handleChange}
                    margin="normal"
                    name="nombre"
                    className="nombre"
                    label="Nombre"
                    defaultValue=""
                    variant="outlined"

                />
                <TextField
                    onChange={this.handleChange}
                    name="apellido"
                    className="apellido"
                    label="Apellido"
                    defaultValue=""
                    variant="outlined"

                />
                <TextField
                    onChange={this.handleChange}
                    name="posicion"
                    className="posicion"
                    label="Posicion"
                    defaultValue=""
                    variant="outlined"

                />
                <TextField
                    onChange={this.handleChange}
                    name="telefono"
                    className="telefono"
                    label="Telefono"
                    defaultValue=""
                    variant="outlined"

                />
                <TextField
                    onChange={this.handleChange}
                    name="email"
                    className="email"
                    label="Email"
                    defaultValue=""
                    variant="outlined"

                />
                <TextField
                    onChange={this.handleChange}
                    name="avatar"
                    className="avatar"
                    label="Avatar URL"
                    defaultValue=""
                    variant="outlined"
                />


                <Button className={this.classes.button} variant="contained" color="primary" onClick={this.handleClick}>
                    Guardar
      </Button>



            </div>
        </div>
    );}
}


export default FormPropsTextFields;
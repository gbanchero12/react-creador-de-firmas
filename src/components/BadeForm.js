import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import '../components/styles/badge.css'

const styles = theme => ({
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
  });


class FormPropsTextFields extends React.Component {
    constructor() {
        super()
    
        this.state = {
          nombre: '',
          apellido: '',
          telefono: '',
          posicion:'',
          email:'',
          avatar:''
        }
      }

    
    


    handleChange = evento => {
        //con esto veo el input que relleno y el valor asignado!
        /*console.log({
            value: evento.target.value,
            name: evento.target.name
        });*/
    
       this.setState({
            [evento.target.name] : [evento.target.value],
        });
        console.log(this.state);
    }

    handleClick = evento => {
        console.log("click");
    }


    render(){
    
        const { classes } = this.props;
    
    return (
        <div className="Badge">
            <div className={classes.root} >

                <h1>Nueva firma: </h1>
                <TextField
                    onChange={this.handleChange.bind(this)}
                    margin="normal"
                    name="nombre"
                    className="nombre"
                    label="Nombre"
                    defaultValue=""
                    variant="outlined"

                />
                <TextField
                    onChange={this.handleChange.bind(this)}
                    name="apellido"
                    className="apellido"
                    label="Apellido"
                    defaultValue=""
                    variant="outlined"

                />
                <TextField
                    onChange={this.handleChange.bind(this)}
                    name="posicion"
                    className="posicion"
                    label="Posicion"
                    defaultValue=""
                    variant="outlined"

                />
                <TextField
                    onChange={this.handleChange.bind(this)}
                    name="telefono"
                    className="telefono"
                    label="Telefono"
                    defaultValue=""
                    variant="outlined"

                />
                <TextField
                    onChange={this.handleChange.bind(this)}
                    name="email"
                    className="email"
                    label="Email"
                    defaultValue=""
                    variant="outlined"

                />
                <TextField
                    onChange={this.handleChange.bind(this)}
                    name="avatar"
                    className="avatar"
                    label="Avatar URL"
                    defaultValue=""
                    variant="outlined"
                />


                <Button className={classes.button} variant="contained" color="primary" onClick={this.handleClick}>
                    Guardar
      </Button>



            </div>
        </div>
    );}
}


export default withStyles(styles)(FormPropsTextFields);
import React from 'react';
import PrimarySearchAppBar from '../components/NavBar';
import Badge from '../components/Badge';
import { Grid } from '@material-ui/core';
import BadgeForm from '../components/BadeForm';

class BadgeNew extends React.Component {
  render(props) {
    return (
        <div>
        <PrimarySearchAppBar/>
        <Grid container>
        <Grid item sm={6}>
        <Badge 
        name="Guillermo" 
        surname="Banchero" 
        position="React Developer" 
        contacto="099093041" 
        email="gbachero@hexa.com.uy"/>
        </Grid>
        <Grid item sm={6}>
        <BadgeForm/>
        </Grid>
        </Grid>
        </div>
        );
  }
}

export default BadgeNew;

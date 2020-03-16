import React from 'react';
import './styles/badge.css'
import logoAsse from '../images/logoASSE.svg';
import avatar from '../images/download.png';

const data = {
  posicion: "React Developer",
  contacto: "099 093 041",
  email:"gbanchero@hexa.com.uy"
}

class Badge extends React.Component {
  render(props) {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={logoAsse} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img className="Badge__avatar" src={avatar} alt="Avatar" />
          <h1>
            {this.props.name} <br />
            {this.props.surname}
          </h1>
        </div>

        <div className="Badge__section-info">
          <p>
            {data.posicion}
          </p>
          <p>{data.contacto}</p>
        </div>

        <div className="Badge__footer">

    <p>{data.email}</p>
        </div>

      </div>
    );
  }
}

export default Badge;

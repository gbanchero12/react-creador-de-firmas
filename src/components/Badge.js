import React from 'react';
import './styles/badge.css'
import logoAsse from '../images/logoASSE.svg';
import avatar from '../images/download.png';



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
            {this.props.position}
          </p>
          <p>{this.props.contacto}</p>
        </div>

        <div className="Badge__footer">

    <p>{this.props.email}</p>
        </div>

      </div>
    );
  }
}

export default Badge;

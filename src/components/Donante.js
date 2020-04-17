import React, { Component } from 'react';
import {
  Card, CardText, CardBody, CardTitle,
} from 'reactstrap';

class Donante extends Component {
  state = {
    nombre: this.props.nombre,
    ciudad: this.props.ciudad,
    pais: this.props.pais,
    correo: this.props.correo,
    donaciones: this.props.donaciones,
  }

  render() {
    return (
      <Card className="mt-3" style={{ backgroundColor: '#ae51f5' }}>
        <CardBody>
          <CardTitle style={{ color: 'white' }}>{ this.state.nombre }</CardTitle>
          <CardText style={{ color: 'white' }}>
            {`Ciudad: ${this.state.ciudad}
              País: ${this.state.pais}
              Correo: ${this.state.correo}
              Ha donado: ${this.state.donaciones}`}
          </CardText>
        </CardBody>
      </Card>
     );
  }
}

export default Donante;

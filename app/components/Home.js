// @flow
import React, { Component } from 'react';
import styles from './Home.css';
// Material-UI

// Styles
const localStyles = {
  container: {
    textAlign: 'center',
    padding: '20px'
  }
}

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  constructor(props, context) {
    super(props, context)

    // Default text
    this.state = {
      text: '', 
      title: 'Bienvenido Hermano',
      welcomeText: 'Bienvenido a Teocratic Wall le recordamos querido hermano que esta es una herramienta para poder compartir informacion de eventos como predicacion algunas asignaciones con el fin de aprovechar las tecnologias y asi poder tener siempre acceder a la misma.',
      recomendations: 'Nota: Esta aplicacion fue creada para agendar informacion de la congregacion por lo tanto para el uso exclusivo de Testigos de Jehova, si es usted Testigo de Jehova y no esta designado al uso de esta aplicacion o usted no es un Testigo de Jehova le remomendamos poder cerrar la aplicacion y desinstalarla'
    }
  }

  onSubmit = e => {
    // No real submit
    e.preventDefault()

    // Get input value
    const text = this.refs.cool_text.input.value

    // Set state
    this.setState({
      text
    })

    // Do something with text
    alert(`You said : ${text}`)
  }

  render() {
    return (
      <div style={{ color: 'black'}}>
          <div>Home</div>
      </div>
    );
  }
}


/* <h1>Material-UI</h1>
<h2>example project</h2>
<form onSubmit={this.onSubmit}>
  <TextField
    ref='cool_text'
    floatingLabelText='Say something cool!'
    defaultValue={this.state.text}
  />
  <br />
  <RaisedButton to="/counter" type='submit' label='Submit' primary />
</form> */
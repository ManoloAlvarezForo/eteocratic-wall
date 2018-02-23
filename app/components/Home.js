// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
// Material-UI
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import AppBar from 'material-ui/AppBar';
import MoreVert from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';

// Styles
const localStyles = {
  container: {
    textAlign: 'center',
    paddingTop: 200
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
      title: 'Bienvenido Hermano'
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
      <div>
        <AppBar style={{ backgroundColor: '#454546' }}
          title={this.state.title} iconElementRight={<IconButton><MoreVert /></IconButton>} 
        />
        <div style={localStyles.container}>
          <h1>Material-UI</h1>
          <h2>example project</h2>
          <form onSubmit={this.onSubmit}>
            <TextField
              ref='cool_text'
              floatingLabelText='Say something cool!'
              defaultValue={this.state.text}
            />
            <br />
            <RaisedButton to="/counter" type='submit' label='Submit' primary />
          </form>
        </div>
      </div>
    );
  }
}
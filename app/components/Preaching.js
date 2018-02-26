// @flow
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MoreVert from 'material-ui/svg-icons/navigation/more-vert';


// Material-UI
export default class Preaching extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props)

    // Default text
    this.state = {
      text: '', 
      title: 'Predicacion'
    }
  }

  render() {
    return (
        <div>
        <AppBar style={{ backgroundColor: '#454546' }}
          title={this.state.title} iconElementRight={<IconButton><MoreVert /></IconButton>} 
        />
        <div>
            Preaching
        </div>
      </div>
    );
  };
}
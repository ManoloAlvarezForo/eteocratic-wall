// @flow
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MoreVert from 'material-ui/svg-icons/navigation/more-vert';
import {List, ListItem, makeSelectable} from 'material-ui/List'; 
import Paper from 'material-ui/Paper';
import NotificationWc from 'material-ui/svg-icons/notification/wc'; 


// Material-UI
export default class PreachingDetail extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props)

    // Default text
    this.state = {
      text: '', 
      title: 'Detail'
    }
  }

  render() {
    return (
        <div>
            <AppBar style={{ backgroundColor: '#454546' }}
                title={this.state.title} iconElementRight={<IconButton><MoreVert /></IconButton>}
            />
            <div style={{ margin: "20px"}}>
                Detail
            </div>
        </div>
    );
  };
}
// @flow
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MoreVert from 'material-ui/svg-icons/navigation/more-vert';
import {List, ListItem, makeSelectable} from 'material-ui/List'; 
import Paper from 'material-ui/Paper';
import NotificationWc from 'material-ui/svg-icons/notification/wc'; 
import Link from 'react-router-dom/Link';


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
            <div style={{ margin: "20px"}}>
                <List>
                    <Paper zDepth={1} style={{ borderRadius: '5px'}}>
                        <ListItem style={{ borderRadius: '5px' }} containerElement={<Link to="/preachingdetail" color="white"/>} primaryText="Del 1 de Enero de 2018 al 3 de Enero de 2018" leftIcon={<NotificationWc />} />
                    </Paper>
                </List>
            </div>
        </div>
    );
  };
}
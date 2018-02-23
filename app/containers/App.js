// @flow
import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { deepOrange500 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import NotificationWc from 'material-ui/svg-icons/notification/wc';
import DirectionWalk from 'material-ui/svg-icons/maps/directions-walk';
import AvMic from 'material-ui/svg-icons/av/mic';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import Avatar from 'material-ui/Avatar'; 
import ActionAssignment from 'material-ui/svg-icons/action/assignment'; 
import AccountBalance from 'material-ui/svg-icons/action/account-balance'; 
import PropTypes from 'prop-types'; 
import CustomDrawer from "../components/Drawer";


// Theme
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
})

type Props = {
  children: React.Node
};

// Styles
const localStyles = {
  layout: {
    flexDirection: 'row',
  },
  colorWhite: {
    color: 'white'
  }
};

export default class App extends React.Component<Props> {
  props: Props;

  constructor(props) {
    super(props)

    // Default text
    this.state = { open: true };
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={{ flex: 1, flexDirection: 'row', display: 'flex' }}>
          <CustomDrawer />
          <div style={{ width: '100%' }}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
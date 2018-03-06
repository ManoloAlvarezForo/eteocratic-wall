// @flow
import React, { Component } from 'react';
import MiniDrawer from "../components/Drawer";
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import indigo from 'material-ui/colors/indigo';
import pink from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';
import classNames from 'classnames';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';

const drawerWidth = 240;

// All the following keys are optional.
// We try our best to provide a great default value.
const theme = createMuiTheme({
  palette: {
    primary: { main: '#5D3DA1'},
    secondary: pink,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

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

class MainContent extends React.Component {
  render() {
    return (
      <div style={{ width: '100%' }}>
        {this.props.children}
      </div>
    )
  }
}


export default class App extends React.Component<Props> {
  props: Props;

  constructor(props) {
    super(props)

    // Default text
    this.state = { open: true };
  }

  render() {

    return (
      <MuiThemeProvider theme={theme}>
        <div style={{ flex: 1, flexDirection: 'row', display: 'flex' }}>
          <MiniDrawer contentadded={this.props.children}/>
        </div>
      </MuiThemeProvider>
    );
  }
}
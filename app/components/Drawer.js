// @flow 
import React, { Component } from 'react'; 
import Drawer from 'material-ui/Drawer'; 
import MenuItem from 'material-ui/MenuItem'; 
import RaisedButton from 'material-ui/RaisedButton'; 
import { deepOrange500 } from 'material-ui/styles/colors' 
import Paper from 'material-ui/Paper'; 
import {List, ListItem, makeSelectable} from 'material-ui/List'; 
import ContentInbox from 'material-ui/svg-icons/content/inbox'; 
import ActionGrade from 'material-ui/svg-icons/action/grade'; 
import ContentSend from 'material-ui/svg-icons/content/send'; 
import ContentDrafts from 'material-ui/svg-icons/content/drafts'; 
import Divider from 'material-ui/Divider'; 
import ActionInfo from 'material-ui/svg-icons/action/info'; 
import ActionHome from 'material-ui/svg-icons/action/home'; 
import NotificationWc from 'material-ui/svg-icons/notification/wc'; 
import DirectionWalk from 'material-ui/svg-icons/maps/directions-walk'; 
import AvMic from 'material-ui/svg-icons/av/mic'; 
import ActionSettings from 'material-ui/svg-icons/action/settings'; 
import Avatar from 'material-ui/Avatar'; 
import ActionAssignment from 'material-ui/svg-icons/action/assignment'; 
import AccountBalance from 'material-ui/svg-icons/action/account-balance'; 
import PropTypes from 'prop-types'; 
import { push } from 'react-router-redux'
import Link from 'react-router-dom/Link';
 
type Props = { 
  children: React.Node 
}; 
 
let SelectableList = makeSelectable(List); 
 
function wrapState(ComposedComponent) { 
  return class SelectableList extends Component { 
    static propTypes = { 
      children: PropTypes.node.isRequired, 
      defaultValue: PropTypes.number.isRequired, 
    }; 
 
    componentWillMount() { 
      this.setState({ 
        selectedIndex: this.props.defaultValue, 
      }); 
    } 
 
    handleRequestChange = (event, index) => { 
      this.setState({ 
        selectedIndex: index, 
      }); 
    }; 
 
    render() { 
      return ( 
        <ComposedComponent 
          value={this.state.selectedIndex} 
          onChange={this.handleRequestChange} 
        > 
          {this.props.children} 
        </ComposedComponent> 
      ); 
    } 
  }; 
} 
 
SelectableList = wrapState(SelectableList); 

// const CustomListItem = (props) => {
//     return render(
//         <div>
//             <></ListItem>
//         </div>
//     );
// }
 
export default class CustomDrawer extends Component<Props> { 
  props: Props; 
 
  constructor (props) { 
    super(props) 
    this.state = {open: true}; 
  } 

  
 
  render() { 
    return ( 
          <Paper style={{ width: '250px', height: '100vh', backgroundColor: '#5D3DA1' }} zDepth={2}> 
            <div style={{ color: 'white', textAlign: 'center', padding: '10px', fontSize: '25px'}}>Teocratic Wall</div>  
            <div style= {{ paddingBottom: "8px", textAlign: 'center', fontSize: '14px', color: 'white'}}>Los Sauces</div> 
            <Divider /> 
            <SelectableList defaultValue={0}> 
              <ListItem color="white" containerElement={<Link to="/" />} primaryText="Inicio" value={0} style={{color: 'white'}} leftIcon={<ActionHome color={ "white" }/>} /> 
              <ListItem color="white" containerElement={<Link to="/preaching" />} primaryText="Predicacion" value={1} style={{color: 'white'}} leftIcon={<NotificationWc color={ "white" }/>} /> 
              <ListItem containerElement={<Link to="/" color="white"/>} value={2}  style={{color: 'white'}} primaryText="Acomodadores" leftIcon={<DirectionWalk color={ "white" }/>} /> 
              <ListItem value={3}  style={{color: 'white'}} primaryText="Microfonos" leftIcon={<AvMic color={ "white" }/>} /> 
              <ListItem value={4}  style={{color: 'white'}} primaryText="Configuracion" leftIcon={<ActionSettings color={ "white" }/>} /> 
            </SelectableList> 
          </Paper> 
    ); 
  } 
} 
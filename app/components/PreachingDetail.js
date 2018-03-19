// @flow
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import DatePicker from "../../material-ui/DatePicker";
import areIntlLocalesSupported from 'intl-locales-supported'; 
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Icon from 'material-ui/Icon';
import DeleteIcon from 'material-ui-icons/Delete';
import ExpansionPanelDetail from "./ExpansionPanelDetail";
import ExpansionPanelDetailChild from "./ExpansionPanelDetailChild";
import ExpansionPanels from "./ExpansionPanels";

import DateSelection from "./DateSelection";

const PanelCustomDetail = (props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap:'flex-start'}}>
      <div style={{ width: '50%', color: 'black'}}>Conductor: {props.preachingLead}</div>
      <div style={{ width: '50%', color: 'black'}}>Territorio: {props.territory}</div>
      <div style={{ width: '50%', color: 'black'}}>{props.description}</div>
    </div>
  );
}

const ExpansionPanelList = (props) => {
  return (
      <div style={{ margin: '5px'}}>
        { props.panels.map(panel => <ExpansionPanelDetail  panelName = { panel.title + panel.secondTitle} key={panel.title}  title = { panel.title } secondTitle = { panel.secondTitle } list = 
        { panel.panels.map(child => <ExpansionPanelDetailChild panelName = {child.title + child.secondTitle} description={ <PanelCustomDetail preachingLead={ child.preachingLead } territory={ child.territory }/> } key={child.title} title= {child.title} secondTitle={ child.secondTitle}/>)} />)}
      </div>
  );
}

let listDays = [
  {
    title: 'Lunes 1 de Enero de 2018',
    secondTitle: '2 salidas',
    panels: [
      {
        moment: 'Maniana',
        preachingLead: 'Boris Garcia',
        territory: '5B',
        title: 'Casa Garcia',
        secondTitle: '8:30 am',
        description: 'Some description'
      },
      {
        title: 'Plazuela Orellana',
        secondTitle: '7:30 am',
        description: 'Some description'
      }
    ]
  },
  {
    title: 'Martes 2 de Enero de 2018',
    secondTitle: '2 salidas',
    panels: [
      {
        moment: 'Tarde',
        preachingLead: 'David Encinas',
        territory: '7-9',
        title: 'Casa Torrico',
        secondTitle: '9:15 am',
        description: 'Some description'
      },
      {
        title: 'Casa Orellana',
        secondTitle: '4:40 pm',
        description: 'Some description'
      }
    ]
  },
];

// Material-UI
export default class PreachingDetail extends React.Component {
  props: Props;

  render() {
    return (
      <div style={{ backgroundColor: '#7f7f94',borderRadius: '5px', minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column'}}>
        <div style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
        <Paper style={{ margin: '5px', width: '100%', height: '50px', borderRadius: '5px', display: 'flex', flexDirection: 'row' }} elevation={1}>
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#3a3a52', borderRadius: '5px 0 0 5px'}}>
            <div style={{ marginLeft: '15px', marginRight: '15px', color: 'white'}}>Fecha</div>
          </div>
          <DateSelection />
          <div style={{ width: '100%', justifyContent: 'flex-end', alignItems: 'center', display: 'flex' }}>
              <div style={{ width: '90px', display: 'flex', justifyContent: 'space-around',  margin:'3px'}}>
              <Button variant="fab" mini color="primary" aria-label="add" >
                <AddIcon />
              </Button>
              <Button variant="fab" mini color="primary" aria-label="delete">
                <DeleteIcon />
              </Button>
              </div>
          </div>
        </Paper>
        </div>
        <div style={{ overflow: 'scroll', height: 'calc(100vh - 150px)'}}>
         <ExpansionPanelList panels={listDays} />
        </div>
      </div>
    );
  };
}
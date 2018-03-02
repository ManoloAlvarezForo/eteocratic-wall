// @flow
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MoreVert from 'material-ui/svg-icons/navigation/more-vert';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import NotificationWc from 'material-ui/svg-icons/notification/wc';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import DatePicker from 'material-ui/DatePicker';
import areIntlLocalesSupported from 'intl-locales-supported';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionDone from 'material-ui/svg-icons/action/done';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import { black } from 'material-ui/styles/colors';
import ActionHome from 'material-ui/svg-icons/action/home';

let DateTimeFormat;

/**
 * Use the native Intl.DateTimeFormat if available, or a polyfill if not.
 */
if (areIntlLocalesSupported(['bo', 'es-BO'])) {
  DateTimeFormat = global.Intl.DateTimeFormat;
} else {
  const IntlPolyfill = require('intl');
  DateTimeFormat = IntlPolyfill.DateTimeFormat;
  // require('intl/locale-data/jsonp/bo');
  // require('intl/locale-data/jsonp/es-BO');
}

const style = {
  margin: 12,
};

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
          title={this.state.title} iconElementLeft={<IconButton><NavigationArrowBack /></IconButton>} iconElementRight={<IconButton><MoreVert /></IconButton>}
        />
        <div style={{ margin: "10px", display: 'flex', height: 'calc(100vh - 85px)', display: 'flex', flexDirection: 'column' }}>
          <Paper zDepth={1} style={{ borderRadius: '10px' }}>
            <div>
              <div style={{ flexDirection: 'row', display: 'flex', height: '54px' }}>
                <div style={{ backgroundColor: '#454546', alignItems: 'center', display: 'flex', borderRadius: '10px 0 0 10px' }}>
                  <div style={{ color: 'white', marginRight: '15px', marginLeft: '15px' }}>
                    Fecha
                  </div>
                </div>
                <div style={{ alignItems: 'center', display: 'flex' }}>
                  <div style={{ marginRight: '15px', marginLeft: '15px', color: 'grey' }}>Desde:</div>
                </div>
                <DatePicker style={{ marginTop: '4px' }}
                  okLabel="Aceptar"
                  cancelLabel="Cancelar"
                  locale="es-BO"
                  hintText="Fecha inicio"
                  mode="landscape"
                  locale="es-BO"
                  DateTimeFormat={DateTimeFormat}
                  firstDayOfWeek={0}
                  formatDate={new DateTimeFormat('es-BO', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  }).format}
                />
                <div style={{ alignItems: 'center', display: 'flex' }}>
                  <div style={{ marginRight: '15px', marginLeft: '15px', color: 'grey' }}>Hasta:</div>
                </div>
                <DatePicker
                  style={{ marginTop: '4px' }}
                  okLabel="Aceptar"
                  cancelLabel="Cancelar"
                  locale="es-BO"
                  mode="landscape"
                  hintText="Fecha final"
                  locale="es-BO"
                  DateTimeFormat={DateTimeFormat}
                  firstDayOfWeek={0}
                  formatDate={new DateTimeFormat('es-BO', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  }).format}
                />
                <div style={{ width: '100%', justifyContent: 'flex-end', flexDirection: 'row', display: 'flex', alignItems: 'center', display: 'flex' }}>
                  <FloatingActionButton backgroundColor='white' mini={true} zDepth={1}>
                    <NavigationClose style={{ color: 'black', fill: 'black' }} />
                  </FloatingActionButton>
                  <FloatingActionButton mini={true} style={style} zDepth={1}>
                    <ActionDone />
                  </FloatingActionButton>
                </div>
              </div>
            </div>
          </Paper>
          {/* body */}
          <div style={{ overflow: 'scroll', marginTop: '15px'}}>
            <div>
              <Paper zDepth={1} style={{ margin: '10px', borderRadius: '10px'}}>
                <div style={{ height: '54px', display: 'flex', flexDirection: 'row', borderRadius: '10px 0 0 10px' }}>
                  <div style={{ width: '50px',  backgroundColor: '#8c8c8c', alignItems: 'center', borderRadius: '10px 0 0 10px' , display: 'flex', justifyContent: 'center' }}>
                    <div style={{color: 'white', marginRight: '15px', marginLeft: '15px' }}>
                      L
                    </div>
                  </div>
                  <div style={{ marginLeft: '15px', alignItems: 'center', display: 'flex' }}>
                    <div>Lunes, 1 de Enero de 2018</div>
                  </div>
                </div>
              </Paper>
              <Paper zDepth={1} style={{ margin: '10px', borderRadius: '10px'}}>
                <div style={{ height: '54px', display: 'flex', flexDirection: 'row', borderRadius: '10px 0 0 10px' }}>
                  <div style={{  width: '50px', backgroundColor: '#8c8c8c', alignItems: 'center', borderRadius: '10px 0 0 10px' , display: 'flex', justifyContent: 'center' }}>
                    <div style={{ color: 'white', marginRight: '15px', marginLeft: '15px' }}>
                      MA
                    </div>
                  </div>
                  <div style={{ marginLeft: '15px', alignItems: 'center', display: 'flex' }}>
                    <div>Martes, 2 de Enero de 2018</div>
                  </div>
                </div>
              </Paper>
              <Paper zDepth={1} style={{ margin: '10px', borderRadius: '10px'}}>
                <div style={{ height: '54px', display: 'flex', flexDirection: 'row', borderRadius: '10px 0 0 10px' }}>
                  <div style={{ width: '50px', backgroundColor: '#8c8c8c', alignItems: 'center', borderRadius: '10px 0 0 10px' , display: 'flex', justifyContent: 'center' }}>
                    <div style={{ color: 'white', marginRight: '15px', marginLeft: '15px' }}>
                      MI
                    </div>
                  </div>
                  <div style={{ marginLeft: '15px', alignItems: 'center', display: 'flex' }}>
                    <div>Miercoles, 3 de Enero de 2018</div>
                  </div>
                </div>
              </Paper>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

{/* <IconButton style={{ color: 'green', border: '2px solid', borderRadius: '50%' }}>
<ContentAdd color= 'green' />
</IconButton> */}
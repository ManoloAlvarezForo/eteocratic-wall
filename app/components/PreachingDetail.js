// @flow
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import DatePicker from "../../material-ui/DatePicker";
import areIntlLocalesSupported from 'intl-locales-supported'; 

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


// Material-UI
export default class PreachingDetail extends Component<Props> {
  props: Props;

  render() {
    return (
      <div style={{ backgroundColor: '#7f7f94',borderRadius: '5px', minHeight: '100vh', width: '100%', display: 'flex'}}>
        <div style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
        <Paper style={{ margin: '5PX', width: '100%', height: '50px', borderRadius: '5px', display: 'flex', flexDirection: 'row' }} elevation={1}>
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#3a3a52', borderRadius: '5px 0 0 5px'}}>
            <div style={{ marginLeft: '15px', marginRight: '15px', color: 'white'}}>Fecha</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center'}}>
             <div style={{marginLeft: '15px', color: 'black'}}>
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
             </div>
          </div>
        </Paper>
        </div>
      </div>
    );
  };
}

{/* <IconButton style={{ color: 'green', border: '2px solid', borderRadius: '50%' }}>
<ContentAdd color= 'green' />
</IconButton> */}
import React from 'react';
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

export default class DateSelection extends React.Component  {
    props: Props;

    render() {
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginLeft: '15px', color: 'black' }}>
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
                <div style={{ marginLeft: '15px', color: 'black' }}>
                    <DatePicker style={{ marginTop: '4px' }}
                        okLabel="Aceptar"
                        cancelLabel="Cancelar"
                        locale="es-BO"
                        hintText="Fecha final"
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
        )
    }
}
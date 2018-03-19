'use strict';

import getMuiTheme from './styles/getMuiTheme';

  let theme = getMuiTheme({
    palette: {
      textColor: '#24292e',
    }
  });

exports.muiTheme = theme;


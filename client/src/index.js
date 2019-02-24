import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import MainRouting from './routing/MainRouting/MainRouting';

/* Render React in DOM element with ID root. */
ReactDOM.render(
    <ThemeProvider theme={theme}>
        <MainRouting />
    </ThemeProvider>,
    document.getElementById('root')
);

// @flow
import React, { Component } from 'react';
import styles from './Home.css';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import WcIcon from 'material-ui-icons/Wc';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
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
            <div style={{ backgroundColor: '#7f7f94',borderRadius: '5px', height: '100vh',  display: 'flex', justifyContent: 'center' }}>
                    <List style={{ width: '80%' }}
                        component="nav"
                    >
                        <Paper style={{ margin: '5px', borderRadius: '5px' }}  elevation={1}>
                            <ListItem component={Link} to='/preachingdetail' button>
                                <ListItemIcon>
                                    <WcIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Del 1 de Enero de 2018 al 3 de Enero de 2018" />
                            </ListItem>
                        </Paper>
                        <Paper style={{ margin: '5px', borderRadius: '5px' }}  elevation={1}>
                            <ListItem component={Link} to='/preachingdetail' button>
                                <ListItemIcon>
                                    <WcIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Del 1 de Enero de 2018 al 3 de Enero de 2018" />
                            </ListItem>
                        </Paper>
                        <Paper style={{margin: '5px', borderRadius: '5px' }}  elevation={1}>
                            <ListItem component={Link} to='/preachingdetail' button>
                                <ListItemIcon>
                                    <WcIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Del 1 de Enero de 2018 al 3 de Enero de 2018" />
                            </ListItem>
                        </Paper>

                    </List>
            </div>
        );
    };
}
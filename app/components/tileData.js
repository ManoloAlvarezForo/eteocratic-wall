import React, { Component } from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import MailIcon from 'material-ui-icons/Mail';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';
import HomeIcon from 'material-ui-icons/Home';
import WcIcon from 'material-ui-icons/Wc';
import MicIcon from 'material-ui-icons/Mic';
import WalkIcon from 'material-ui-icons/DirectionsWalk';
import SettingsIcon from 'material-ui-icons/Settings';
import Link from 'react-router-dom/Link';
import Tooltip from 'material-ui/Tooltip';

export const mainOptionsListItems = (
    <div>
        <Tooltip id="tooltip-left-start" title="Inicio" placement="left-start">
            <ListItem component={Link} to='/' button>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Inicio" />
            </ListItem>
        </Tooltip>
        <ListItem component={Link} to='/preaching' button>
            <ListItemIcon>
                <WcIcon />
            </ListItemIcon>
            <ListItemText primary="Predicacion" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <WalkIcon />
            </ListItemIcon>
            <ListItemText primary="Acomodadores" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <MicIcon />
            </ListItemIcon>
            <ListItemText primary="Microfonos" />
        </ListItem>
    </div>
);

export const configFolderListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Configuracion" />
        </ListItem>
    </div>
);
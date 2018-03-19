import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Chip from 'material-ui/Chip';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  customPanel: {
    borderRadius: '5px !important',
    
  },
  headerBackground: {
    backgroundColor: '#eeedf1',
    borderRadius: '5px !important',
  }
});

class ExpansionPanelDetailChild extends React.Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { expanded } = this.state;
    const { classes } = this.props;
    let { listData } = this.props;
    let { title } = this.props;
    let { panelName } = this.props;
    let { secondTitle } = this.props;
    let { description } = this.props;

    return (
        <ExpansionPanel className={classes.customPanel} expanded={ expanded === this.props.panelName } onChange={ this.handleChange(this.props.panelName) }>
          <ExpansionPanelSummary className={classes.headerBackground} expandIcon={<ExpandMoreIcon />}>
            <Typography className={ classes.heading}>{this.props.title }</Typography>
            <Typography className={ classes.secondaryHeading}>{this.props.secondTitle }</Typography>
          </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{ display: 'flex', flexDirection: 'column'}}>
            { this.props.description }
            </ExpansionPanelDetails>
            <Divider />
          <ExpansionPanelActions>
          <Button  size="small" color="secondary">
              Eliminar
          </Button>
            <Button color="green" size="small" color="primary">
              Editar
          </Button>

          </ExpansionPanelActions>
        </ExpansionPanel>
    );
  }
}

ExpansionPanelDetailChild.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpansionPanelDetailChild);
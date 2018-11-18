import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import PageviewIcon from '@material-ui/icons/Pageview';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import InputAdornment from '@material-ui/core/InputAdornment';



const styles = theme => ({
  subtitle: {
    display: 'inline',
    paddingLeft: 6,
    marginTop: 1,
    position: 'absolute',
  },
  dialogBox: {
    maxWidth: '80%',
  },
  subtitleIcon: {
    display: 'inline',
    padding: 3,
  },
  listItemText: {
    marginLeft: 10,
  },
  ListItem: {
    marginTop: 10,
    marginBottom: 17,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  section: {
    borderBottom: '1px solid rgb(0,0,0,.25)',
  },
});

class BetchaDialog extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      betcontent: '',
      checked: [],
      items: [],
    };
  }

  handleBetContentChange = () => (event) => {
    const betcontent = event.target.value;
    this.setState({ betcontent });
  }

  handleToggle = value => () => {
    const { checked } = this.state; 
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex == -1) {
      newChecked.push(value);
    } else { 
      newChecked.splice(currentIndex, -1);
    }

    this.setState({
      checked: newChecked,
    });
  };

   addItem(event) {
    const { items: currentItems } = this.state;
    const { betchaConnection } = this.props;
    const nameTextbox = event.target.previousElementSibling;
    const urlTextbox = nameTextbox.previousElementSibling;

      currentItems.push(nameTextbox.value);
      nameTextbox.value = '';

      this.setState({
        items: currentItems,
      });
  }

  addStake(event) {
     const { stakes: currentStakes } = this.state;
    const { betchaConnection } = this.props;
    const nameTextbox = event.target.previousElementSibling;
    const urlTextbox = nameTextbox.previousElementSibling;

      currentStakes.push(nameTextbox.value);
      nameTextbox.value = '';

      this.setState({
        stakes: currentStakes,
      });
  }

  render() {
  const { classes, open, handleClose, appBar } = this.props;
  const { 
    betcontent,
  } = this.state;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      className={classes.dialogBox}
      fullWidth
    >
      <DialogTitle id="form-dialog-title">
        Let's Make a Bet                                                                                                                                          
      </DialogTitle>
      <DialogContent>
        <div>
          <div className={classes.section}>
            <AssignmentIcon className={classes.subtitleIcon} />
            <Typography variant="subtitle1" className={classes.subtitle}>
              What are we betting on?
            </Typography>
          </div>
          <TextField
            id="outlined-full-width"
            style={{ margin: 8 }}
            placeholder="Let's Make a Bet"
            fullWidth
            multiline
            margin="normal"
            variant="outlined"
            InputLabelProps={{
            shrink: true,
          }}
          onChange = {this.handleBetContentChange()}
          />
        </div>
        <div>
          <div className={classes.section}>
            <AssignmentTurnedInIcon className={classes.subtitleIcon} />
            <Typography variant="subtitle1" className={classes.subtitle}>
            Outcomes
            </Typography>
          </div>
          <div className={classes.root}>
            <List>
              {this.state.items.map(value => ( // eslint-disable-line react/destructuring-assignment
                <ListItem key={value} dense button>
                  <ListItemText primary={`${value}`} />
                </ListItem>
              ))}
            </List>
            <nav className="nav-add">
              <input type="text" id="nameinput" placeholder="Outcome" />
              <button type="submit" id="new-item" onClick={this.addItem.bind(this)}>
              Add
              </button>
            </nav>
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
    );
  }
}

BetchaDialog.propTypes = {
  open: PropTypes.bool,
  handleCancel: PropTypes.func,
  handleCreate: PropTypes.func,
  handleClose: PropTypes.func,
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  appBar: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  betchaConnection: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types

};

BetchaDialog.defaultProps = {
  open: false,
  handleCancel: () => {},
};

export default withStyles(styles)(BetchaDialog);

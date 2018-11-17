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

function handleAdd(tcrBar) {
  return () => {
    tcrBar.setState((state) => {
      const chipData = [...state.chipData];
      chipData.push({
        key: Math.floor(Math.random() * 10000),
      });
      return { chipData };
    });
    tcrBar.setState({ tcrDialogOpened: false });
  };
}

const betchaDialog = (props) => {
  const { classes, open, handleClose, tcrBar } = props;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      className={classes.dialogBox}
      fullWidth
    >
      <DialogTitle id="form-dialog-title">
        Bet On It
      </DialogTitle>
      <DialogContent>
        <div>
          <div className={classes.section}>
            <AssignmentIcon className={classes.subtitleIcon} />
            <Typography variant="subtitle1" className={classes.subtitle}>
              Submission
            </Typography>
          </div>
          <ListItem className={classes.ListItem}>
            <ListItemText className={classes.listItemText}>
              Minimum Deposit
            </ListItemText>
            <div>
            </div>
          </ListItem>
        </div>
        <div>
          <div className={classes.section}>
            <AssignmentTurnedInIcon className={classes.subtitleIcon} />
            <Typography variant="subtitle1" className={classes.subtitle} />
          </div>
          <ListItem className={classes.ListItem}>
            <ListItemText className={classes.listItemText}>
             Each maintainer holds equal voting rights.
             Curation
              {' '}
            </ListItemText>
            <Checkbox
              defaultChecked
            />
          </ListItem>
        </div>
        <div>
          <div className={classes.section}>
            <PageviewIcon className={classes.subtitleIcon} />
            <Typography variant="subtitle1" className={classes.subtitle}>
              Subscription
            </Typography>
          </div>
          <ListItem className={classes.ListItem}>
            <ListItemText className={classes.listItemText}>
             Consumer pays to subscribe to the list.
              Curation
              {' '}
            </ListItemText>
            <Checkbox />
          </ListItem>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAdd(tcrBar)} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

betchaDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  tcrBar: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

betchaDialog.defaultProps = {
  open: false,
  handleClose: () => {},
};

export default withStyles(styles)(betchaDialog);

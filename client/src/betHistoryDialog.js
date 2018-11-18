import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
});

let id = 0;
function createData(name, tokens) {
  id += 1;
  return { id, name, tokens };
}

const rows = [
  createData(12, 159),
  createData(12, 237),
  createData(12, 262),
  createData(12, 305),
  createData(12, 356),
];

class BetHistoryDialog extends React.Component {
  state = {
    open: false,
    scroll: 'paper',
  };

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  // Placeholder for form submission
  handleSubmit = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen('paper')}>Details</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="bet-history"
        >
          <DialogTitle id="bet-history">Bet history</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Here are the history of bets placed by observers.
            </DialogContentText>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Rank</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell numeric>Tokens</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => {
                  return (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell> {row.name} </TableCell>
                      <TableCell numeric>{row.tokens}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            <TextField
              id="currenttime"
              defaultValue="12"
              label="Current Time"
              margin="normal"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="tokens"
              label="Bet on it!"
              type="number"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Join
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

BetHistoryDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BetHistoryDialog);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat',
    fontSize: '5rem'
  },
  palette: {
    primary: lightBlue,
    secondary: amber
  },
  overrides: {
    MuiAppBar: {
      // Name of the styleSheet
      root: {
        // Name of the rule
        boxShadow: 'none',
      },
    },
  },
});

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Betcha
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
import React from 'react';
import PropTypes from 'prop-types'; import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const styles = {
  card: {
  	marginTop: 20,
  	marginLeft: 10,
    width: '65%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  slider: {
    padding: '22px 0px',
  },
  agent: {
    fontSize: '16px',
    fontWeight: 500,
  },
};


const BaseCard = (prop) =>  {
	const { classes } = prop;

    return (
    	<div>
    		<Card className={classes.card}>
    			<CardContent>
    				<Typography className={classes.agent}>
    					hahahhaa
    				</Typography>
    				<form className={classes.container} noValidate autoComplete="off">
          			</form>
    			</CardContent>
    		</Card>
    	</div>
    );
};




/* eslint-enable react/no-unused-prop-types */
export default withStyles(styles)(BaseCard);
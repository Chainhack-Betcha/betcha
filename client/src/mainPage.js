import React from "react"; 
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BetCard from './betCard'
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Add from '@material-ui/icons/Add';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BetchaDialog from './BetchaDialog';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';




const styles = theme => ({
  button: {
    marginLeft : 20,
  },
  appBar: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
  gridContainer : {
    flexGrow: 1,
    marginLeft: 15,
    paddingLeft: 20,
  },
  button: {
    display: 'inline',
    marginTop: 20,
  },
  sectionHoldingCards: {
    paddingLeft: 30,
    width : '90%',

  },
  sectionHoldingButton: {
    paddingLeft: 5,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  card : {
    display : 'inline',
  },
  appBar: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
  icon: {
    fontSize: 35,
    color: 'secondary',
  },
  iconButton: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  div: {
    display: 'flex',
    flexDirection: 'row-reverse',
    paddingLeft: 1221,

  }
});

class MainPage extends React.Component {

  constructor(props) {
    super(props);
    const betCards = ['haha'];

  this.state = {
    betCards,
    betchaDialogOpened: false,
  };
}

  handleClick (event) {
    const {betCards} = this.state;
    betCards.push('haha');
    this.setState({ betCards});
  }

  handleAddClick() {
  	return () => { 
  		this.setState({ betchaDialogOpened: true });
  	};
  }

  handlebetchaDialogClose() {
  	return () => {
  		this.setState({ betchaDialogOpened: false });
  	};
  }

  handleUserProfileClick = () =>{

      this.props.history.push('/userProfile'); 
  
  }

  render() {
    const { classes } = this.props;
    const { betCards, betchaDialogOpened } = this.state;

    return (
	 <div>
       <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant='h4' color="secondary">
            Betcha
          </Typography>
          <div className={classes.div}>
          <IconButton
            color="inherit"
            className={classes.iconButton}
            onClick={this.handleUserProfileClick}
            >
          <AccountCircle className={classes.icon} color='secondary'/>
          </IconButton>
          </div>
          </Toolbar>
          </AppBar>
          <Grid container className={classes.gridContainer}>
          <div className={classes.sectionHoldingCards}>
            {betCards.map((bet) => (
              <Grid item xs={17}>
              <BetCard className={classes.card}/>
              </Grid>
            ))}
          </div>
          <div className={classes.sectionHoldingButton}>
          <Button size="small" variant="fab" onClick={this.handleClick.bind(this)} className={classes.button}>
            <Add />
            <BetchaDialog open={betchaDialogOpened} handleClose={this.handlebetchaDialogClose()} appBar={this}/>
          </Button>
          </div>
          </Grid>


          <Chip
            label="+"
            className={classes.chip}
            onClick={this.handleAddClick()}
            color="primary"
          />
          <BetchaDialog open={betchaDialogOpened} handleClose={this.handlebetchaDialogClose()} appBar={this}/>
      </div>
		);
  }
};


export default withStyles(styles)(MainPage);
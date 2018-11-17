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



const styles = {
  button: {
    marginLeft : 20,
  }
}

class MainPage extends React.Component {

  constructor(props) {
    super(props);
    const betCards = [];

  this.state = {
    betCards,
  };
}

  handleClick (event) {
    const {betCards} = this.state;
    betCards.push('haha');
    this.setState({ betCards});
  }

  render() {
    const { classes } = this.props;
    const { betCards } = this.state;
		return (
	 <div>
       <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant='h4' color="secondary">
            Betcha
          </Typography>
          </Toolbar>
          </AppBar>
          <div>
            {betCards.map((bet) => (
              <BetCard />
            ))}
          </div>
          <Button size="small" variant="fab" onClick={this.handleClick.bind(this)} className={classes.button}>
            <Add/>
          </Button>

      </div>
		);
  }
};


export default withStyles(styles)(MainPage);
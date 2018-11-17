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
import betchaDialog from './betchaDialog';




class MainPage extends React.Component {

  constructor(props) {
    super(props);
    const betCards = ['haha'];

  this.state = {
    betCards,
    betchaDialogOpened: false,
  };
}

  handleClick = () => {

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

  render() {
    const { betCards, betchaDialogOpened } = this.state;

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
            {betCards.map((tcr) => (
              <BetCard />
            ))}
          </div>
          <Button variant="fab" onClick={this.handleClick}>
           <Add/>
          </Button>

      </div>
		);
  }
};



export default MainPage;
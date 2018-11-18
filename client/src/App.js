import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./utils/getWeb3";
import truffleContract from "truffle-contract";
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserProfile from './UserProfile';
import MainPage from './mainPage';


import "./App.css";

const muiTheme = createMuiTheme({
  palette: {
    primary: {main : '#83af7c'},
    secondary: {main: '#ffffff'},

  },
  fontFamily: 'Roboto, sans-serif',
});

const styles = {
  root: {
    height: '100%',
  }
}

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };


  // componentDidMount = async () => {
  //   try {
  //     // Get network provider and web3 instance.
  //     const web3 = await getWeb3();

  //     // Use web3 to get the user's accounts.
  //     const accounts = await web3.eth.getAccounts();

  //     // Get the contract instance.
  //     const Contract = truffleContract(SimpleStorageContract);
  //     Contract.setProvider(web3.currentProvider);
  //     const instance = await Contract.deployed();

  //     // Set web3, accounts, and contract to the state, and then proceed with an
  //     // example of interacting with the contract's methods.
  //     this.setState({ web3, accounts, contract: instance }, this.runExample);
  //   } catch (error) {
  //     // Catch any errors for any of the above operations.
  //     alert(
  //       `Failed to load web3, accounts, or contract. Check console for details.`
  //     );
  //     console.log(error);
  //   }
  // };

  // runExample = async () => {
  //   const { accounts, contract } = this.state;

  //   // Stores a given value, 5 by default.
  //   await contract.set(5, { from: accounts[0] });

  //   // Get the value from the contract to prove it worked.
  //   const response = await contract.get();

  //   // Update state with the result.
  //   this.setState({ storageValue: response.toNumber() });
  // };

  render() {
    const { classes } = this.props;
    // if (!this.state.web3) {
    //   return <div>Loading Web3, accounts, and contract...</div>;
    // } 
    return (
      <MuiThemeProvider theme={muiTheme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/UserProfile" component={UserProfile} />
        </Switch>
     </BrowserRouter>
     </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);

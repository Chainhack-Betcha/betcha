import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./utils/getWeb3";
import truffleContract from "truffle-contract";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './mainPage';
import NewBetSection from './NewBetSection';


import "./App.css";

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
    <div>
      <nav class="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
        <div class="container">
          <a class="navbar-brand js-scroll-trigger" href="#page-top">Betcha</a>
          <button class="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item mx-0 mx-lg-1">
                <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a>
              </li>
              <li class="nav-item mx-0 mx-lg-1">
                <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Portfolio</a>
              </li>
              <li class="nav-item mx-0 mx-lg-1">
                <a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header class="masthead bg-primary text-white text-center">
        <div class="container">
          <img class="img-fluid mb-5 d-block mx-auto" src="img/betcha.png" alt="" />
          <h1 class="text-uppercase mb-0">Welcome to Betcha</h1>
          <hr class="star-light" />
          <h2 class="font-weight-light mb-0">Web Developer - Graphic Artist - User Experience Designer</h2>
        </div>
      </header>

      <section id="about">
        <div class="container">
          <h2 class="text-center text-uppercase text-secondary mb-0">About</h2>
          <hr class="star-dark mb-5" />
          <div class="row">
            <div class="col-lg-4 ml-auto">
              <p class="lead">Ever made small bets with your friends but never got anything? We present Betcha, and that will never be of your concern. Log your bets and chip in in other bets to get a bigger reward!</p>
            </div>
            <div class="col-lg-4 mr-auto">
              <p class="lead">Get yourself some Betty, and whenever you make bets with your friends even if it's just a tiny bet, play it here!</p>
            </div>
          </div>
          <div class="text-center mt-4">
            <a class="btn btn-xl btn-outline-light" href="#">
              <i class="fas fa-download mr-2"></i>
              Let's Start
            </a>
          </div>
        </div>
      </section>

      <section class="bg-primary text-white mb-0" id="portfolio">
        <div class="container">
          <h2 class="text-center text-uppercase text-white">Portfolio</h2>
          <hr class="star-light mb-5" />
          <div class="row">
            <div class="col-md-6 col-lg-4">
              <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
                <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i class="fas fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src="img/portfolio/cabin.png" alt="" />
              </a>
            </div>
            <div class="col-md-6 col-lg-4">
              <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-2">
                <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i class="fas fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src="img/portfolio/cake.png" alt="" />
              </a>
            </div>
            <div class="col-md-6 col-lg-4">
              <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-3">
                <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i class="fas fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src="img/portfolio/circus.png" alt="" />
              </a>
            </div>
            <div class="col-md-6 col-lg-4">
              <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-4">
                <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i class="fas fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src="img/portfolio/game.png" alt="" />
              </a>
            </div>
            <div class="col-md-6 col-lg-4">
              <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-5">
                <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i class="fas fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src="img/portfolio/safe.png" alt="" />
              </a>
            </div>
            <div class="col-md-6 col-lg-4">
              <a class="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
                <div class="portfolio-item-caption d-flex position-absolute h-100 w-100">
                  <div class="portfolio-item-caption-content my-auto w-100 text-center text-white">
                    <i class="fas fa-search-plus fa-3x"></i>
                  </div>
                </div>
                <img class="img-fluid" src="img/portfolio/submarine.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>


      <section id="contact">
        <NewBetSection />
      </section>

      <footer class="footer text-center">
        <div class="container">
          <div class="row">
            <div class="col-md-4 mb-5 mb-lg-0">
              <h4 class="text-uppercase mb-4">Location</h4>
              <p class="lead mb-0">2215 John Daniel Drive
                <br />Clark, MO 65243</p>
            </div>
            <div class="col-md-4 mb-5 mb-lg-0">
              <h4 class="text-uppercase mb-4">Around the Web</h4>
              <ul class="list-inline mb-0">
                <li class="list-inline-item">
                  <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                    <i class="fab fa-fw fa-facebook-f"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                    <i class="fab fa-fw fa-google-plus-g"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                    <i class="fab fa-fw fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                    <i class="fab fa-fw fa-linkedin-in"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                    <i class="fab fa-fw fa-dribbble"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <h4 class="text-uppercase mb-4">About Freelancer</h4>
              <p class="lead mb-0">Freelance is a free to use, open source Bootstrap theme created by
                <a href="http://startbootstrap.com">Start Bootstrap</a>.</p>
            </div>
          </div>
        </div>
      </footer>

      <div class="copyright py-4 text-center text-white">
        <div class="container">
          <small>Copyright &copy; Your Website 2018</small>
        </div>
      </div>

      <div class="scroll-to-top d-lg-none position-fixed ">
        <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
          <i class="fa fa-chevron-up"></i>
        </a>
      </div>

      <div class="portfolio-modal mfp-hide" id="portfolio-modal-1">
        <div class="portfolio-modal-dialog bg-white">
          <a class="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
            <i class="fa fa-3x fa-times"></i>
          </a>
          <div class="container text-center">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <h2 class="text-secondary text-uppercase mb-0">Project Name</h2>
                <hr class="star-dark mb-5" />
                <img class="img-fluid mb-5" src="img/portfolio/cabin.png" alt="" />
                <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <a class="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                  <i class="fa fa-close"></i>
                  Close Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="portfolio-modal mfp-hide" id="portfolio-modal-2">
        <div class="portfolio-modal-dialog bg-white">
          <a class="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
            <i class="fa fa-3x fa-times"></i>
          </a>
          <div class="container text-center">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <h2 class="text-secondary text-uppercase mb-0">Project Name</h2>
                <hr class="star-dark mb-5" />
                <img class="img-fluid mb-5" src="img/portfolio/cake.png" alt="" />
                <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <a class="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                  <i class="fa fa-close"></i>
                  Close Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="portfolio-modal mfp-hide" id="portfolio-modal-3">
        <div class="portfolio-modal-dialog bg-white">
          <a class="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
            <i class="fa fa-3x fa-times"></i>
          </a>
          <div class="container text-center">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <h2 class="text-secondary text-uppercase mb-0">Project Name</h2>
                <hr class="star-dark mb-5" />
                <img class="img-fluid mb-5" src="img/portfolio/circus.png" alt="" />
                <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <a class="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                  <i class="fa fa-close"></i>
                  Close Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="portfolio-modal mfp-hide" id="portfolio-modal-4">
        <div class="portfolio-modal-dialog bg-white">
          <a class="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
            <i class="fa fa-3x fa-times"></i>
          </a>
          <div class="container text-center">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <h2 class="text-secondary text-uppercase mb-0">Project Name</h2>
                <hr class="star-dark mb-5" />
                <img class="img-fluid mb-5" src="img/portfolio/game.png" alt="" />
                <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <a class="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                  <i class="fa fa-close"></i>
                  Close Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="portfolio-modal mfp-hide" id="portfolio-modal-5">
        <div class="portfolio-modal-dialog bg-white">
          <a class="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
            <i class="fa fa-3x fa-times"></i>
          </a>
          <div class="container text-center">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <h2 class="text-secondary text-uppercase mb-0">Project Name</h2>
                <hr class="star-dark mb-5" />
                <img class="img-fluid mb-5" src="img/portfolio/safe.png" alt="" />
                <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <a class="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                  <i class="fa fa-close"></i>
                  Close Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="portfolio-modal mfp-hide" id="portfolio-modal-6">
        <div class="portfolio-modal-dialog bg-white">
          <a class="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
            <i class="fa fa-3x fa-times"></i>
          </a>
          <div class="container text-center">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <h2 class="text-secondary text-uppercase mb-0">Project Name</h2>
                <hr class="star-dark mb-5" />
                <img class="img-fluid mb-5" src="img/portfolio/submarine.png" alt="" />
                <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                <a class="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                  <i class="fa fa-close"></i>
                  Close Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default withStyles(styles)(App);

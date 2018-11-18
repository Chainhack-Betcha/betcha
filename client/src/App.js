import React, { Component } from 'react';
import SimpleStorageContract from './contracts/SimpleStorage.json';
import getWeb3 from './utils/getWeb3';
import NewBetSection from './NewBetSection';

import './App.css';

export default class App extends Component {
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
    // if (!this.state.web3) {
    //   return <div>Loading Web3, accounts, and contract...</div>;
    // }
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
              Betcha
            </a>
            <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="masthead bg-primary text-white text-center">
          <div className="container">
            <img className="img-fluid mb-5 d-block mx-auto" src="img/betcha.png" alt="" />
            <h1 className="text-uppercase mb-0">
              Welcome to Betcha
            </h1>
            <hr className="star-light" />
            <h2 className="font-weight-light mb-0">
              Some corny one-liner here.
            </h2>
          </div>
        </header>

        <section id="about">
          <div className="container">
            <h2 className="text-center text-uppercase text-secondary mb-0">
              About
            </h2>
            <hr className="star-dark mb-5" />
            <div className="row">
              <div className="col-lg-4 ml-auto">
                <p className="lead">
                  Ever made small bets with your friends but never got anything? We present Betcha,
                  and that will never be of your concern. Log your bets and chip in in other bets
                  to get a bigger reward!
                </p>
              </div>
              <div className="col-lg-4 mr-auto">
                <p className="lead">
                  Get yourself some Betty, and whenever you make bets with your friends even if
                  it&quot;s just a tiny bet, play it here!
                </p>
              </div>
            </div>
            <div className="text-center mt-4">
              <a className="btn btn-xl btn-outline-light" href="#">
                <i className="fas fa-download mr-2" />
                Let&quot;s Start
              </a>
            </div>
          </div>
        </section>

        <section className="bg-primary text-white mb-0" id="portfolio">
          <div className="container">
            <h2 className="text-center text-uppercase text-white">Portfolio</h2>
            <hr className="star-light mb-5" />
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-1">
                  <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                      <i className="fas fa-search-plus fa-3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src="img/portfolio/cabin.png" alt="" />
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-2">
                  <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                      <i className="fas fa-search-plus fa-3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src="img/portfolio/cake.png" alt="" />
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-3">
                  <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                      <i className="fas fa-search-plus fa-3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src="img/portfolio/circus.png" alt="" />
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-4">
                  <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                      <i className="fas fa-search-plus fa-3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src="img/portfolio/game.png" alt="" />
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-5">
                  <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                      <i className="fas fa-search-plus fa-3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src="img/portfolio/safe.png" alt="" />
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <a className="portfolio-item d-block mx-auto" href="#portfolio-modal-6">
                  <div className="portfolio-item-caption d-flex position-absolute h-100 w-100">
                    <div className="portfolio-item-caption-content my-auto w-100 text-center text-white">
                      <i className="fas fa-search-plus fa-3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src="img/portfolio/submarine.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </section>


        <section id="contact">
          <NewBetSection />
        </section>

        <footer className="footer text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Location</h4>
                <p className="lead mb-0">
                  2215 John Daniel Drive
                  <br />
                  Clark, MO 65243
                </p>
              </div>
              <div className="col-md-4 mb-5 mb-lg-0">
                <h4 className="text-uppercase mb-4">Around the Web</h4>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                      <i className="fab fa-fw fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                      <i className="fab fa-fw fa-google-plus-g" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                      <i className="fab fa-fw fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                      <i className="fab fa-fw fa-linkedin-in" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light btn-social text-center rounded-circle" href="#">
                      <i className="fab fa-fw fa-dribbble" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h4 className="text-uppercase mb-4">About Freelancer</h4>
                <p className="lead mb-0">Freelance is a free to use, open source Bootstrap theme created by
                  <a href="http://startbootstrap.com">Start Bootstrap</a>.
                </p>
              </div>
            </div>
          </div>
        </footer>

        <div className="copyright py-4 text-center text-white">
          <div className="container">
            <small>
              Copyright &copy; Betcha 2018
            </small>
          </div>
        </div>

        <div className="scroll-to-top d-lg-none position-fixed ">
          <a className="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
            <i className="fa fa-chevron-up" />
          </a>
        </div>

        <div className="portfolio-modal mfp-hide" id="portfolio-modal-1">
          <div className="portfolio-modal-dialog bg-white">
            <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
              <i className="fa fa-3x fa-times" />
            </a>
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                  <hr className="star-dark mb-5" />
                  <img className="img-fluid mb-5" src="img/portfolio/cabin.png" alt="" />
                  <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                  <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                    <i className="fa fa-close" />
                    Close Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-modal mfp-hide" id="portfolio-modal-2">
          <div className="portfolio-modal-dialog bg-white">
            <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
              <i className="fa fa-3x fa-times" />
            </a>
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                  <hr className="star-dark mb-5" />
                  <img className="img-fluid mb-5" src="img/portfolio/cake.png" alt="" />
                  <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                  <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                    <i className="fa fa-close" />
                    Close Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-modal mfp-hide" id="portfolio-modal-3">
          <div className="portfolio-modal-dialog bg-white">
            <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
              <i className="fa fa-3x fa-times" />
            </a>
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                  <hr className="star-dark mb-5" />
                  <img className="img-fluid mb-5" src="img/portfolio/circus.png" alt="" />
                  <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                  <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                    <i className="fa fa-close" />
                    Close Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-modal mfp-hide" id="portfolio-modal-4">
          <div className="portfolio-modal-dialog bg-white">
            <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
              <i className="fa fa-3x fa-times" />
            </a>
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                  <hr className="star-dark mb-5" />
                  <img className="img-fluid mb-5" src="img/portfolio/game.png" alt="" />
                  <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                  <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                    <i className="fa fa-close" />
                    Close Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-modal mfp-hide" id="portfolio-modal-5">
          <div className="portfolio-modal-dialog bg-white">
            <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
              <i className="fa fa-3x fa-times" />
            </a>
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2 className="text-secondary text-uppercase mb-0">Project Name</h2>
                  <hr className="star-dark mb-5" />
                  <img className="img-fluid mb-5" src="img/portfolio/safe.png" alt="" />
                  <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                  <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                    <i className="fa fa-close" />
                    Close Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-modal mfp-hide" id="portfolio-modal-6">
          <div className="portfolio-modal-dialog bg-white">
            <a className="close-button d-none d-md-block portfolio-modal-dismiss" href="#">
              <i className="fa fa-3x fa-times" />
            </a>
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h2 className="text-secondary text-uppercase mb-0">
                    Project Name
                  </h2>
                  <hr className="star-dark mb-5" />
                  <img className="img-fluid mb-5" src="img/portfolio/submarine.png" alt="" />
                  <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                  <a className="btn btn-primary btn-lg rounded-pill portfolio-modal-dismiss" href="#">
                    <i className="fa fa-close" />
                    Close Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

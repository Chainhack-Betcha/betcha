import React from 'react';
import PropTypes from 'prop-types';

export default class TokenBalance extends React.Component {
  state = {
    balance: 0,
  }

  componentDidMount = async () => {
    const { tokenService } = this.props;
    const balance = await tokenService.currentAccountBalance();
    this.setState({ balance });
  }

  onClick = () => async () => {
    const { tokenService } = this.props;
    const addresses = [
      '0x795ce35409A92b8E35E2E7517029675f124e426e',
      '0xA4dEd68e0c84ecdbE7b2577D03cC909bB3aCbbcC',
      '0x7787723115B2Ae02Cec084780ADA6A0d033dfAe5',
      '0x500844354a18348835F702bce82A04bCBA074A2d',
      '0x639bfe3e0b68A4806FfBaE8f9e5A40C5a7B7FdA1',
      '0x3735271ABe741Bb7e32493202894CB0aeD2BE27A',
      '0x0DB381f92E21629C352607056441cEe09CAea49B',
      '0x6A985E418e2E3126979Ca4579E8F17c45748EA97',
      '0x78973B4b87e03f7804ec0BbB89F0665F1CFd63FE',
      '0x4191A462061C2aB1D2D12b963Dfc097D4A02Cd6C',
    ]
    await tokenService.distributeTokens(addresses, 500);
  }

  render() {
    const { balance } = this.state;
    // console.log(await tokenService.currentAccountBalance());
    return (
      <a
        className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
        href="#"
        onClick={this.onClick()}
      >
        <span>
          {balance.toString()}
        </span>
        <span className="text-muted ml-1">BET</span>
      </a>
    );
  }
}

TokenBalance.propTypes = {
  tokenService: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

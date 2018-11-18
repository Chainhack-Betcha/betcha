import { getTokenContract } from './config';

export default class TokenService {
  constructor(web3) {
    this.web3 = web3;
    this.token = null;
  }

  async init() {
    this.token = await getTokenContract(this.web3);
  }

  async balanceOf(account) {
    return this.token.balanceOf(account);
  }

  async currentAccountBalance() {
    return this.token.currentAccountBalance();
  }
}

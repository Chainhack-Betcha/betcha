import { getUserProfilesContract } from './config';

export default class UserProfiles {
  constructor(web3) {
    this.web3 = web3;
    this.userProfiles = null;
  }

  async init() {
    this.userProfiles = await getUserProfilesContract(this.web3);
  }

  async register(userId) {
    return this.userProfiles.registerUser(userId);
  }

  async getUserIdOf(address) {
    return this.userProfiles.getUserIdOf(address);
  }

  async getAddressOf(userId) {
    return this.userProfiles.getAddressOf(userId);
  }
}

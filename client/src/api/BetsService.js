import { getBetsContract } from './config';

export default class BetsService {
  constructor() {
    this.web3 = null;
    this.bets = null;
  }

  async init(web3) {
    this.web3 = web3;
    this.bets = await getBetsContract(this.web3);
    window.bets = this;
  }

  async getAllBets() {
    return new Promise((resolve, reject) => {
      this.bets.Creation({}, { fromBlock: 0, toBlock: 'latest' }).get((error, events) => {
        if (error) {
          reject(error);
        } else {
          const allBets = events.map(({ args }) => ({
            betId: args.betId,
            description: args.description,
            outcomes: args.outcomes.map(o => window.web3.toAscii(o).trim()),
            judge: args.judge,
          }));
          resolve(allBets);
        }
      });
    });
  }

  /**
   * Create a new bet (the current user will become the judge)
   * @param {string[]} outcomes All possible outcomes of the bet
   */
  async create(description, outcomes) {
    return new Promise((resolve, reject) => {
      this.bets.create(description, outcomes.map(window.web3.toHex), (error, tx) => {
        if (error) {
          reject(error);
        } else {
          resolve(tx);
        }
      });
    });
  }

  async getJudgeOf(betId) {
    return new Promise((resolve, reject) => {
      this.bets.getJudgeOf(betId, (error, tx) => {
        if (error) {
          reject(error);
        } else {
          resolve(tx);
        }
      });
    });
  }

  /**
   * Checks if the current user has already placed a bet on a certain bet.
   * @param {number} betId ID of the bet to reveal
   */
  async hasPlacedBet(betId) {
    return new Promise((resolve, reject) => {
      this.bets.hasPlacedBet(betId, (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  }

  /**
   * @param {number} betId ID of the bet to reveal
   * @param {number} outcomeIndex Index of the outcome, corresponds to the outcomes array used to
                                  create the bet.
   * @param {number} stakeAmount Amount ot tokens to bet.
   */
  async betOn(betId, outcomeIndex, stakeAmount) {
    return new Promise((resolve, reject) => {
      this.bets.betOn(betId, outcomeIndex, stakeAmount, (error, tx) => {
        if (error) {
          reject(error);
        }
        resolve(tx);
      });
    });
  }

  /**
   * Reveal the outcome of a bet during reveal period. Only the judge of the bet can do this.
   * @param {number} betId ID of the bet to reveal
   * @param {number} outcomeIndex Index of the outcome, corresponds to the outcomes array used to
                                  create the bet.
   */
  async revealOutcome(betId, outcomeIndex) {
    const judge = await this.getJudgeOf(betId);
    if (this.web3.eth.defaultAccount !== judge) {
      throw new Error('Only the judge can reveal outcome');
    }
    return new Promise((resolve, reject) => {
      this.bets.revealOutcome(betId, outcomeIndex, (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  }

  async getJudgeOf(betId) {
    return new Promise((resolve, reject) => {
      this.bets.getJudgeOf(betId, (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });
  }

  async hasRevealed(betId) {
    return false; // i <3 hardcode
  }
}

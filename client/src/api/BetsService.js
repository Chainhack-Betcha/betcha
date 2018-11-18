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
            // outcomes: args.outcomes.map(window.web3.toAscii),
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
  async create(outcomes) {
    return new Promise((resolve, reject) => {
      this.bets.create(outcomes.map(window.web3.toHex), (error, tx) => {
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
    return this.bets.hasPlacedBet(betId);
  }

  /**
   * @param {number} betId ID of the bet to reveal
   * @param {number} outcomeIndex Index of the outcome, corresponds to the outcomes array used to
                                  create the bet.
   * @param {number} stakeAmount Amount ot tokens to bet.
   */
  async betOn(betId, outcomeIndex, stakeAmount) {
    this.bets.betOn(betId, outcomeIndex, stakeAmount);
  }

  /**
   * Reveal the outcome of a bet during reveal period. Only the judge of the bet can do this.
   * @param {number} betId ID of the bet to reveal
   * @param {number} outcomeIndex Index of the outcome, corresponds to the outcomes array used to
                                  create the bet.
   */
  async revealOutcome(betId, outcomeIndex) {
    const judge = await this.bets.getJudgeOf(betId);
    if (this.web3.eth.defaultAccount !== judge) {
      throw new Error('Only the judge can reveal outcome');
    }
    this.bets.revealOutcome(betId, outcomeIndex);
  }
}

pragma solidity ^0.4.24;
import "./token/BettyToken.sol";

contract Bets {

    event Creation(uint indexed betId);

    struct Bet {
        uint id;
        bytes32[] outcomes;
        mapping (address => Betting) participantsBets;
        address judge;
        bool revealed;
    }

    struct Betting {
        uint stakeAmount;
        uint outcomeSelected;
    }

    uint nextBet = 0;

    BettyToken token;
    address[] participants;
    mapping (uint => Bet) bets;

    constructor(BettyToken _token) public {
        token = _token;
    }

    function nextBetId() internal returns (uint) {
        return nextBet++;
    }

    function create(bytes32[] _outcomes) external returns (uint) {
        uint betId = nextBetId();
        Bet storage bet = bets[betId];
        bet.id = betId;
        bet.outcomes = _outcomes;
        bet.judge = msg.sender;

        emit Creation(betId);
    }

    function betOn(uint _betId, uint _outcomeIndex, uint _stakeAmount) external {
        Bet storage bet = bets[_betId];

        require(msg.sender == bet.judge, "Judges cannot participate in their bets");
        require(_outcomeIndex < bet.outcomes.length, "Invalid outcome");
        require(token.balanceOf(msg.sender) >= _stakeAmount, "Not enough tokens");

        bet.participantsBets[msg.sender].stakeAmount = _stakeAmount;
        bet.participantsBets[msg.sender].outcomeSelected = _outcomeIndex;

        participants.push(msg.sender);

        token.transferFrom(msg.sender, this, _stakeAmount);
    }

    function revealOutcome(uint _betId, uint _outcomeIndex) internal {
        Bet storage bet = bets[_betId];

        require(msg.sender == bet.judge, "Only the judge can reveal outcome");
        require(_outcomeIndex < bet.outcomes.length, "Invalid outcome");

        uint loserPot = 0;
        for (uint i = 0; i < participants.length; i++) {
            address participant = participants[i];
            Betting storage betting = bet.participantsBets[participant];
            if (betting.outcomeSelected != _outcomeIndex) {
                loserPot += betting.stakeAmount;
            }
        }

        for (i = 0; i < participants.length; i++) {
            participant = participants[i];
            betting = bet.participantsBets[participant];
            if (betting.outcomeSelected == _outcomeIndex) {
                uint winnings = 0; // TODO
                uint totalAmount = betting.stakeAmount + winnings;
                token.transferFrom(this, participant, totalAmount);
            }
        }

        bet.revealed = true;

        // emit OutcomeRevelation(outcome);
    }
}

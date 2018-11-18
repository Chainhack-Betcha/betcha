import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

export default class TokenBalance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stake: 500,
      hasPlacedBet: true,
    };
  }

  componentDidMount = async () => {
    const { betsService, bet } = this.props;
    const { id: betId } = bet;
    const hasPlacedBet = await betsService.hasPlacedBet(betId);
    this.setState({ hasPlacedBet });
  }

  onStakeChange = () => (event) => {
    this.setState({ stake: event.target.value });
  }

  betOn = (betId, index, stake) => async () => {
    const { betsService } = this.props;
    console.log(betId, index, stake);
    try {
      await betsService.betOn(betId, index, stake);
      this.setState({ hasPlacedBet: true });
    } catch (e) {
      console.err(e);
    }
  }

  render() {
    const { stake, hasPlacedBet } = this.state;
    const { bet } = this.props;
    const { id: betId, description, outcomes, judge } = bet;
    return (
      <div>
        <h6 className="text-muted">{judge}</h6>
        <h3>{description}</h3>
        <input type="text" onChange={this.onStakeChange()} value={stake} />
        <List>
          {outcomes.map((value, index) => (
            <ListItem key={value} dense button>
              <ListItemText primary={`${value}`} />
              {(
                !hasPlacedBet
                  ? <ListItemSecondaryAction>
                      <button onClick={this.betOn(betId, index, stake)}>
                        Bet
                      </button>
                    </ListItemSecondaryAction>
                  : <div />
              )}
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

TokenBalance.propTypes = {
  betsService: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  bet: PropTypes.object,
};

TokenBalance.defaultProps = {
  bet: {
    id: 0,
    description: 'Sample',
    outcomes: ['I win', 'You win'],
    judge: '0x01234',
  },
};

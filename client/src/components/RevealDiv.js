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
      hasRevealed: false,
    };
  }

  componentDidMount = async () => {
    const { betsService, bet } = this.props;
    const { id: betId } = bet;
    const hasRevealed = await betsService.hasRevealed(betId);
    this.setState({ hasRevealed });
  }

  revealOutcome = (betId, index) => async () => {
    const { betsService } = this.props;
    try {
      await betsService.revealOutcome(betId, index);
      this.setState({ hasRevealed: true });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const { hasRevealed } = this.state;
    const { bet } = this.props;
    const { id: betId, description, outcomes, judge } = bet;
    return (
      <div>
        <h6 className="text-muted">{judge}</h6>
        <h3>{description}</h3>
        <List>
          {outcomes.map((value, index) => (
            <ListItem key={value} dense button>
              <ListItemText primary={`${value}`} />
              {(
                !hasRevealed
                  ? <ListItemSecondaryAction>
                      <button onClick={this.revealOutcome(betId, index)}>
                        Reveal
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

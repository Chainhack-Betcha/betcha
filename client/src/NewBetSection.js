import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

export default class NewBetSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      outcomes: [],
      deleted: false,
    };
  }

  onDescriptionChange = () => (event) => {
    this.setState({ description: event.target.value });
  }

  addItem = () => (event) => {
    const { outcomes: currentItems } = this.state;
    const nameTextbox = event.target.previousElementSibling;

    currentItems.push(nameTextbox.value);
    nameTextbox.value = '';

    this.setState({
      outcomes: currentItems,
    });
  }

  removeItem = () => (event) => {
      const currentOutcome = event.target.textContent;
      const updatedOutcomes = this.state.outcomes.filter((outcome) => {
        return currentOutcome !== outcome;
      });

      this.setState({
        outcomes: updatedOutcomes,
      });

      !this.state.deleted && this.setState({
        deleted: true
      });
  }
  onCreate = () => async () => {
    const { betsService, onCreateBet } = this.props;
    const { description, outcomes } = this.state;
    await betsService.create(description, outcomes);
    onCreateBet({ description, outcomes });
  }

  render() {
    const { description, outcomes } = this.state;

    return (
      <div className="container">
        <h2 className="text-center text-uppercase text-secondary mb-0">
          Make a bet!
        </h2>
        <hr className="star-dark mb-5" />

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="form-group floating-label-form-group controls mb-0 pb-2">
              <label>
                Let&quot;s Bet On This
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                placeholder="Let's Bet On This"
                required
                data-validation-required-message="Please enter a message."
                value={description}
                onChange={this.onDescriptionChange()}
              />
              <p className="help-block text-danger" />
            </div>
            <div className="form-group floating-label-form-group controls mb-0 pb-2">
              <label>
                What are the possible outcomes???
              </label>
              <List>
                {outcomes.map(value => (
                  <ListItem key={value} dense button>
                    <ListItemText primary={`${value}`} />
                  </ListItem>
                ))}
              </List>
              <nav className="nav-add">
                <input type="text" id="nameinput" placeholder="Outcome" />
                <button type="button" className="btn btn-primary" onClick={this.addItem()}>
                Add
                </button>
              </nav>
            </div>
            <br />
            <div id="success" />
            <div className="form-group">
              <button type="button" className="btn btn-primary btn-xl" onClick={this.onCreate()}>
                Make a bet!
              </button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

NewBetSection.propTypes = {
  onCreateBet: PropTypes.func,
  betsService: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

NewBetSection.defaultProps = {
  onCreateBet: () => {},
};

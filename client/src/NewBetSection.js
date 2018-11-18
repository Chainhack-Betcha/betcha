import React, { Component } from "react";
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

export default class NewBetSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      checked: [],
      items: [],
    }
  } 
  onDescriptionChange = () => (event) => {
    this.setState({ description: event.target.value });
  }

  addItem(event) {
    const { items: currentItems } = this.state;
    const { betchaConnection } = this.props;
    const nameTextbox = event.target.previousElementSibling;
    
    currentItems.push(nameTextbox.value);
    nameTextbox.value = '';

    this.setState({
      items: currentItems,
    });
  }

  render() {
    const { description } = this.state;

    return (
      <div class="container">
        <h2 class="text-center text-uppercase text-secondary mb-0">Contact Me</h2>
        <hr class="star-dark mb-5" />

        <div class="row">
          <div class="col-lg-8 mx-auto">
            
            <form name="sentMessage" id="contactForm" novalidate="novalidate">
              <div class="form-group floating-label-form-group controls mb-0 pb-2">
                <label>Let's Bet On This</label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="3" placeholder="Let's Bet On This" required="required" data-validation-required-message="Please enter a message."
                  value={description}
                  onChange={this.onDescriptionChange()}
                />
                <p class="help-block text-danger"></p>
              </div>

              <div class="form-group floating-label-form-group controls mb-0 pb-2">
                <label>What are the possible outcomes???</label>
                <List>
                  {this.state.items.map(value => ( // eslint-disable-line react/destructuring-assignment
                    <ListItem key={value} dense button>
                      <ListItemText primary={`${value}`} />
                    </ListItem>
                  ))}
                </List>
                <nav className="nav-add">
                  <input type="text" id="nameinput" placeholder="Outcome" />
                  <button type="submit" id="new-item" onClick={this.addItem.bind(this)}>
                  Add
                  </button>
               </nav>
              </div>
              <br />
              <div id="success">
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
              </div>
            </form>

          </div>
        </div>

      </div>
    );
  }
}
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Match, Link } from 'react-router';
import { Avatar, AutoComplete, DatePicker, FlatButton, Paper, TextField, RaisedButton, SelectField, MenuItem }  from 'material-ui/';
// AutoComplete
import axios from 'axios';

const matchContainerStyle = {
  height: 800,
  width: 950,
  margin: '10px auto 0 auto',
  textAlign: 'center',
  display: 'flex', // Fd with this
  justifyContent: 'center',
  alignItems: 'center'
};

const buttonStyle = {
  margin: 12
};

const AddMatchToHistory = React.createClass({

  getInitialState() {
    return {
      p2Id: '',
      scoreP1: '',
      scoreP2: '',
      nameP2: '',
      winP1: '',
      winP2: '',
      AutoMatches: [],
      names: this.props.playerNames
    };
  },

  handleChange(event) {
    const nextState = { [event.target.name]: event.target.value };

    this.setState(nextState);
  },

  addNewMatchToHistory(addedMatch) {
    this.setState({
      AutoMatches: this.props.matches.concat(
        {
          nameP2: addedMatch.player2Name
        }
      )
    });
  },

  handleSubmit(e) {
    e.preventDefault();

    const lowerNames = this.props.playerNames.map((name) => {
      return name.toLowerCase();

    });

    const lowerPlayer = this.state.nameP2.toLowerCase();
    const index = lowerNames.indexOf(lowerPlayer);

    let p2Id = this.props.players[index].id;

    console.log(p2Id, 'player2 Id');

    let WinP1 = false;
    let WinP2 = false;

    if (this.state.scoreP1 === this.state.scoreP2) {
      alert('Ties Not Acceptable');
    } else {
      this.state.scoreP1 > this.state.scoreP2 ? WinP1 = true : WinP2 = true;
    }

    axios.post('/api/matches', {
      p1Id: this.props.playerId,
      p2Id: p2Id,
      scoreP1: this.state.scoreP1,
      scoreP2: this.state.scoreP2,
      winP1: WinP1,
      winP2: WinP2
    })
    .then((response) => {
      this.props.getMatches(this.props.playerId);
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  },

  render() {
    if (this.props.matches) {
    const items = [];
    // for (let i = 0; i <= 21; i++ ) {
    //   items.push(<MenuItem value={i} key={i} primaryText={`Score: ${i}`} />);
    // }

      return (
        <div>
          <Paper style={matchContainerStyle} zDepth={1}>
            <form onSubmit={this.handleSubmit}>
              <div>
                <h2>Add a Match to the History Books...</h2>
                <div>
                  <h4>Player 1:
                     {this.props.user.firstName} {this.props.user.lastName}
                  </h4>
                  <h4>Score:
                    <TextField
                      name="scoreP1"
                      onChange={this.handleChange}
                      value={this.state.scoreP1}
                    />
                    {/* <SelectField
                       value={this.state.value}
                       onChange={this.handleChange}
                       maxHeight={200}
                    >
                      {items}
                    </SelectField> */}
                  </h4>
                </div>
                <h4>Vs.</h4>
                <div>
                  <h4>Player 2:
                    <TextField
                      dataSource={this.props.playerNames}
                      // filter={AutoComplete.caseInsensitiveFilter}
                      onChange={this.handleChange}
                      name="nameP2"
                      value={this.state.nameP2}
                    />
                  </h4>
                  <h4>Score:
                    {/* <SelectField
                       value={this.state.value}
                       onChange={this.handleChange}
                       maxHeight={200}
                    >
                      {items}
                    </SelectField> */}
                    <TextField
                      name="scoreP2"
                      onChange={this.handleChange}
                      value={this.state.scoreP2}
                    />
                   </h4>
                  {/* <div>
                    <DatePicker hintText="Date" />
                  </div> */}
                </div>
              </div>
              <div >
                <RaisedButton
                  label="Add Match Results"
                  style={buttonStyle}
                  type="submit"
                  onClick={this.handleSubmit}
                />
              </div>
            </form>
          </Paper>
        </div>
      );
    }
  }
});

export default AddMatchToHistory;

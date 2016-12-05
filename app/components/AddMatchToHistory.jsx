import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Match, Link } from 'react-router';
import { Avatar, DatePicker, AutoComplete, FlatButton, Paper, TextField, RaisedButton }  from 'material-ui/';
// AutoComplete
import axios from 'axios';

const matchContainerStyle = {
  height: 600,
  width: 950,
  margin: '10px auto 0 auto',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const buttonStyle = {
  margin: 12
};

const AddMatchToHistory = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    console.log('jello');

    const match = this.props.playerNames.indexOf(this.props.player2Name);

    console.log(match, 'match');

    const p2Id = this.props.players[match].id;
    console.log(p2Id);

    let WinP1 = false;
    let WinP2 = false;

    if (this.props.score1 === this.props.score2) {
      return -1;
    } else {
      this.props.score1 > this.props.score2 ? WinP1 = true : WinP2 = true;
    }

    // var result = listOfAllPossibleProducts.filter(function (el) {
    //   return listOfSelectedProductIds.indexOf(el.id) > -1;
    // });

    // console.log(match);

    axios.post('/api/matches', {
      p1Id: this.props.player.id,
      p2Id: this.props.p2Id,
      scoreP1: this.props.scoreP1,
      scoreP2: this.props.scoreP2,
      winP1: WinP1,
      winP2: WinP2
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  },

  render() {
    // console.log('add to match');
    // console.log(this.props.matches, 'props.matches');
    // console.log(this.props.players, 'props.players');
    // console.log(this.props.player, 'props.player');

    if (this.props.matches) {
      return (
        <div>
          <Paper style={matchContainerStyle} zDepth={1}>
            <form onSubmit={this.handleSubmit}>
              <div>
                <h2>Add a Match to the History Books...</h2>
                <div>
                  <h4>Player 1:
                     { this.props.player.firstName} {this.props.player.lastName}
                  </h4>
                  <h4>Score:
                    <TextField
                      name="player1Score"
                      value={this.props.player1score}
                    />
                  </h4>
                </div>
                <h4>Vs.</h4>
                <div>
                  <h4>Player 2:
                    <AutoComplete
                      dataSource={this.props.playerNames}
                      filter={AutoComplete.caseInsensitiveFilter}
                      name="player2Name"
                      value={this.props.player2Name}
                    />
                   </h4>
                  <h4>Score:
                    <TextField
                      name="player2Score"
                      value={this.props.player2score}
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

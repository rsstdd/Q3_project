import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Match, Link } from 'react-router';
import { AutoComplete, Avatar, DatePicker, FlatButton, Paper, TextField, RaisedButton }  from 'material-ui/';


const matchContainerStyle = {
  height: 600,
  width: 950,
  margin: '10px auto 0 auto',
  textAlign: 'center',
  // display: 'inline-block',
  display: 'flex',
  // justifyContent: 'space-around',
  justifyContent: 'center',
  alignItems: 'center'
};

const buttonStyle = {margin: 12};

const AddMatchToHistory = React.createClass({
  handleSubmit(e) {
    e.preventDefault()

    console.log(e.target.player1Score.value)

    this.props.addNewMatchToHistory({
      player1Name: this.props.player1Name,
      player1Score: this.props.player1Score,
      player2Name: this.props.player2Name,
      player2Score: this.props.player2Score,
      date: this.props.player2Name
     })
  },

  // handleClick(event) {
  //   this.props.AddMatchToHistory({
  //     player1Name: this.state.player1Name,
  //     player1Score: this.state.player1Score,
  //     player2Name: this.state.player2Name,
  //     player2Score: this.state.player2Score,
  //     date: this.state.player2Name
  //   });
  // },

  render(){
    return  <div>
      <Paper style={matchContainerStyle} zDepth={1}>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h2>Add a Match to the History Books...</h2>
            <div>
              <h4>Player 1:
                <AutoComplete
                  filter={AutoComplete.caseInsensitiveFilter}
                  dataSource={this.props.players}
                  name="player1Name"
                  value={this.props.player1Name}
                />
              </h4>
              <h4>Score:
                <TextField
                  name="player1Score"
                  // onChange=
                  value={this.props.player1score}
                />
              </h4>
            </div>
            <h4>Vs.</h4>
            <div>
              <h4>Player 2:
                <AutoComplete
                  filter={AutoComplete.caseInsensitiveFilter}
                  dataSource={this.props.players}
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
              <div>
                <DatePicker hintText="Date" />
              </div>
            </div>
          </div>
          <div >
            <RaisedButton
              type="submit"
              label="Add Match Results"
              style={buttonStyle}
            />
          </div>
        </form>
      </Paper>
    </div>
  }
});

export default AddMatchToHistory;

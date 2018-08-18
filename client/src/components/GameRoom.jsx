import React, { Component, Fragment } from 'react';
import BattleMap from './BattleMap.jsx';
import BattleLog from "./BattleLog.jsx";
import GameProfiles from "./GameProfiles.jsx";
import GameOptions from "./GameOptions.jsx";
import DiceTray from "./DiceTray.jsx";
import TokenTemplateList from './TokenTemplateList.jsx';
import {eevee, ninetails, clefairy, lugia} from '../templateImages/tokenData.js';

class GameRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGame: {},
      players: [],
      tokens: [],
      log: [],
      tokenImages: [eevee, ninetails, clefairy, lugia]
    }
  }

  render() {
    return (
      <Fragment>
        <div id="gameContainer">
          <TokenTemplateList tokenImages={this.state.tokenImages}/>
          <BattleMap />   

          <BattleLog />
          <GameProfiles />
          <GameOptions />
          <DiceTray />
        </div>
      </Fragment>
    )
  }
}

export default GameRoom;
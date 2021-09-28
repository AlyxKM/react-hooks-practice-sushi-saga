import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({displaySushis ,setEmptySushi, handleMoveBelt, handleMoneyRemain}) {


  return (
    <div className="belt">
      {displaySushis.map(sushi => <Sushi setEmptySushi={setEmptySushi} handleMoneyRemain={handleMoneyRemain} key={sushi.id} {...sushi}/>)}
      <MoreButton handleMoveBelt={handleMoveBelt}/>
    </div>
  );
}

export default SushiContainer;

import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

const [sushis, setSushis] = useState([])
const [place, setPlace] = useState(0)
const [emptySushi, setEmptySushi] = useState([])
const [moneyRemain, setMoneyRemain] = useState(100)

useEffect(() => {
  fetch(API)
.then(res => res.json())
.then(sushiData => setSushis(sushiData));
}, [])

const displaySushi = sushis.slice(place, place + 4)

function handleEmptySushi(id) {
  if(!emptySushi.includes(id)) {
    const emptyPlateList = [...emptySushi, id]
    setEmptySushi(emptyPlateList)
  }
}

function handleMoneyRemain(price) {
  setMoneyRemain((moneyRemain) => moneyRemain - price)
}

function handleMoveBelt() {
  setPlace((place) => (place + 4)%sushis.length)
}

  return (
    <div className="app">
      <SushiContainer handleMoveBelt={handleMoveBelt} setEmptySushi={handleEmptySushi} displaySushis={displaySushi} handleMoneyRemain={handleMoneyRemain}/>
      <Table moneyRemain={moneyRemain} plates={emptySushi}/>
    </div>
  );
}

export default App;

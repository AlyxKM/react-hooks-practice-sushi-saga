import React from "react";

function Sushi({img_url, name, price, id, setEmptySushi, handleMoneyRemain}) {


  function handleClick() {
    setEmptySushi(id)
    handleMoneyRemain(price)
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={img_url}
            alt={name + " Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;

import React, {useState} from "react";

function Stock( {stock, onBuy} ) {

  const {name, price, ticker, type, id} = stock

  function handleClick (e) {
    onBuy(stock)
  }

  return (
    <div>
      <div onClick={handleClick} className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text"> {ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;

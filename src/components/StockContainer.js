import React from "react";
import Stock from "./Stock";

function StockContainer( {stocks, onBuy, sort, filter} ) {

  console.log(filter)

  const allStocks = stocks
  .sort((stockA, stockB) => {
    if (sort === "Alphabetically") {
      return stockA.name.localeCompare(stockB.name)
    }
    else {
      return stockA.price - stockB.price
    }
  })
  .filter(stock => {
    if (filter === "") {
      return stocks
    } else {
      return stock.type === filter
    }
  })
  .map(stock => {
    return <Stock onBuy={onBuy} key={stock.id} stock={stock} />
  })
  
  return (
    <div>
      <h2>Stocks</h2>
      {allStocks}
    </div>
  );
}

export default StockContainer;

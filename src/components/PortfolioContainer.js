import React from "react";
import Stock from "./Stock";
import PortfolioStock from "./PortfolioStock"

function PortfolioContainer({bought, setBought}) {
  
  const onSell = (clickedStock) => {
    // console.log(clickedStock)
    
    const remainingStock = bought.filter(stock => {
      return stock.id !== clickedStock.id
    })

    setBought(remainingStock)
  }

  const boughtStock = bought.map(stock => {
    return <PortfolioStock onSell={onSell}key={stock.id} stock={stock}/>
  })


  return (
    <div>
      <h2>My Portfolio</h2>
      {boughtStock}
    </div>
  );
}

export default PortfolioContainer;

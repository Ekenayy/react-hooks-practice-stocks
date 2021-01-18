import React from "react";

function PortfolioStock ( {stock, onSell} ) {

    const {name, price, ticker, type, id} = stock

    const handleSell = () => {

        onSell(stock)
    }

    return (
        <div>
          <div onClick={handleSell} className="card">
            <div className="card-body">
              <h5 className="card-title">{stock.name}</h5>
              <p className="card-text"> {stock.ticker}: {stock.price}</p>
            </div>
          </div>
        </div>
        )
}

export default PortfolioStock;

import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const stocksUrl = "http://localhost:3001/stocks"

  const [stocks, setStocks] = useState([])
  const [bought, setBought] = useState([])
  const [sort, setSort] = useState("")
  const [filter, setFilter] = useState("")


  useEffect(() =>
   fetch(stocksUrl)
    .then(r => r.json())
    .then(stocks => setStocks(stocks))
  ,[])
  
  const onBuy = (stock) => {

  let idsArray = bought.map(stock => {
    return stock.id
  })
    if (!idsArray.includes(stock.id)) {
      setBought([
        ...bought,
        stock
     ])
    }

  }

  // console.log(sort)  
  // const onSort = (sort) => {

  // }

  return (
    <div>
      <SearchBar setSort={setSort} setFilter={setFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer sort={sort} filter={filter} onBuy={onBuy} stocks={stocks} />
        </div>
        <div className="col-4">
          <PortfolioContainer bought={bought}  setBought={setBought}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

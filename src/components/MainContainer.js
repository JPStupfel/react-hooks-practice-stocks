import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [displayStocks, setDisplayStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [sortBy, setSortBy] = useState('')

useEffect(
  ()=>fetch('http://localhost:3001/stocks').then(r=>r.json()).then(d=>{setStocks(d);setDisplayStocks(d)}),[]
)

function portfolioAdd(stock){
  if (!portfolio.filter(e=>e.name===stock.name).length) {setPortfolio((prev)=>[...prev, stock])}
}

function portfolioSubtract(stock){
  const filteredPortfolio = portfolio.filter(e=>e.name !== stock.name)
  setPortfolio(filteredPortfolio)
}

function handleSort(event){

  event.preventDefault()
  setSortBy(event.target.value)

  const sortValue = event.target.value === "Alphabetically" ? 'name' : 'price'

  const sortFunction = (a,b)=> (a[sortValue]>b[sortValue] ? 1 : -1)

  const sortedList = [...stocks].sort(sortFunction)
  
  setStocks(sortedList)

}

function handleFilter(event){
  event.preventDefault();
  const filteredStocks = stocks.filter(e=>e.type === event.target.value)
  setDisplayStocks(filteredStocks)
}

  return (
    <div>
      <SearchBar handleFilter={handleFilter} sortBy={sortBy} handleSort={handleSort} />
      <div className="row">
        <div className="col-8">
          <StockContainer portfolioAdd={portfolioAdd} stocks={displayStocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioSubtract={portfolioSubtract} portfolio={portfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

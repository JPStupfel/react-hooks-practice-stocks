import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, portfolioAdd}) {

  const stockCards = stocks.map(e=><Stock clickFunction={portfolioAdd} stock={e} key={e.id}/>)

  return (
    <div>
      <h2>Stocks</h2>
      {stockCards}
    </div>
  );
}

export default StockContainer;

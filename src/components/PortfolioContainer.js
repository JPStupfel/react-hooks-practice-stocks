import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioSubtract, portfolio}) {

  const cards = portfolio.map(e=><Stock clickFunction={()=>portfolioSubtract(e)} key={e.id} stock={e}/>)

  return (
    <div>
      <h2>My Portfolio</h2>
      {
       cards
      }
    </div>
  );
}

export default PortfolioContainer;

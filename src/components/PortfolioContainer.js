import React from 'react';
import Stock from './Stock';

function PortfolioContainer({ ownedStocks, handleStockMove }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {ownedStocks.map((stock, index) => {
        return (
          <Stock
            id="stockOwned"
            stock={stock}
            handleStockMove={handleStockMove}
            key={stock.name}
          />
        );
      })}
    </div>
  );
}

export default PortfolioContainer;

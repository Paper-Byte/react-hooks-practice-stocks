import React from 'react';
import Stock from './Stock';

function StockContainer({ stocksList, handleStockMove }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocksList.map((stock) => {
        return (
          <Stock
            id="stockNotOwned"
            handleStockMove={handleStockMove}
            key={stock.name}
            stock={stock}
          />
        );
      })}
    </div>
  );
}

export default StockContainer;

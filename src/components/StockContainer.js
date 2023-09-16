import React from 'react';
import Stock from './Stock';

const StockContainer = ({
  stocksList,
  handleStockMove,
  categoryFilter,
}) => {
  let stocksToDisplay = [...stocksList];

  if (categoryFilter !== 'All') {
    stocksToDisplay = stocksList.filter((stock) => {
      return stock.type === categoryFilter;
    });
  }
  return (
    <div>
      <h2>Stocks</h2>
      {stocksToDisplay.map((stock) => {
        return (
          <Stock
            location="stockNotOwned"
            handleStockMove={handleStockMove}
            key={stock.name}
            stock={stock}
          />
        );
      })}
    </div>
  );
};

export default StockContainer;

import React, { useState, useEffect } from 'react';
import StockContainer from './StockContainer';
import PortfolioContainer from './PortfolioContainer';
import SearchBar from './SearchBar';

function MainContainer() {
  const [stocksList, setStocksList] = useState([]);
  const [ownedStocks, setOwnedStocks] = useState([]);
  const [sortAlphabeticalOrder, setSortAlphabeticalOrder] =
    useState('false');
  const [sortPriceOrder, setSortPriceOrder] = useState('false');
  const [categoryFilter, setCategoryFilter] = useState('Tech');

  useEffect(() => {
    const fetchStocks = async () => {
      const resp = await fetch('http://localhost:3001/stocks');
      const data = await resp.json();
      setStocksList(data);
    };
    fetchStocks();
  }, []);

  const handleStockMove = (stockToMove, id) => {
    // if (ownedStocks.includes(stockToMove)) {
    //   const newStockList = ownedStocks.filter((stock) => {
    //     return stock.name !== stockToMove.name;
    //   });
    //   setOwnedStocks(newStockList);
    // } else {
    //   setOwnedStocks([...ownedStocks, stockToMove]);
    // }

    if (id === 'stockOwned') {
      const newStockList = ownedStocks.filter((stock) => {
        return stock.name !== stockToMove.name;
      });
      setOwnedStocks(newStockList);
    } else {
      setOwnedStocks([...ownedStocks, stockToMove]);
    }
  };

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocksList={stocksList}
            handleStockMove={handleStockMove}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            ownedStocks={ownedStocks}
            handleStockMove={handleStockMove}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

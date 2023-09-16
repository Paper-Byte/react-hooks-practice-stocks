import React, { useState, useEffect } from 'react';
import StockContainer from './StockContainer';
import PortfolioContainer from './PortfolioContainer';
import SearchBar from './SearchBar';

function MainContainer() {
  const [stocksList, setStocksList] = useState([]);
  const [ownedStocks, setOwnedStocks] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  useEffect(() => {
    const fetchStocks = async () => {
      const resp = await fetch('http://localhost:3001/stocks');
      const data = await resp.json();
      setStocksList(data);
    };
    fetchStocks();
    return fetchStocks();
  }, []);

  const handleStockMove = (stockToMove, location) => {
    if (location === 'stockOwned') {
      const removeIndex = ownedStocks.indexOf(stockToMove);
      const newStocksList = [...ownedStocks];
      newStocksList.splice(removeIndex, 1);
      setOwnedStocks(newStocksList);
    } else {
      setOwnedStocks([...ownedStocks, stockToMove]);
    }
  };

  const handleCategoryFilter = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handleSortOption = (event) => {
    const sortOption = event.target.name;
    setSortOrder(sortOption);
    const sortedStocksList = stocksList;
    setStocksList(
      sortedStocksList.sort((a, b) => {
        if (sortOption === 'alphabetically') {
          let firstStock = a.ticker.toLowerCase();
          let secondStock = b.ticker.toLowerCase();
          if (firstStock < secondStock) {
            return -1;
          }
          if (firstStock > secondStock) {
            return 1;
          } else {
            return 0;
          }
        } else {
          return b.price - a.price;
        }
      })
    );
  };

  return (
    <div>
      <SearchBar
        handleCategoryFilter={handleCategoryFilter}
        handleSortOption={handleSortOption}
        sortOrder={sortOrder}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocksList={stocksList}
            handleStockMove={handleStockMove}
            sortOrder={sortOrder}
            categoryFilter={categoryFilter}
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

import { useState, useEffect } from 'react';

import './App.css';
import Catalog from './components/Catalog';
import SearchBar from './components/SearchBar';
import Container from '@mui/material/Container';

function App() {
  const fakeData = [
    {
			"id": "MLA926653914",
			"title": "Auriculares In-ear Inalámbricos F9-5 Negro",
			"price": 2190.0,
			"currency_id": "ARS",
			"available_quantity": 4682,
			"thumbnail": "http://http2.mlstatic.com/D_938092-MLA45480677826_042021-I.jpg",
			"condition": "new"
		},
		{
			"id": "MLA1143411722",
			"title": "Auriculares In-ear Inalámbricos F9 Negro",
			"price": 2329.0,
			"currency_id": "ARS",
			"available_quantity": 0,
			"thumbnail": "http://http2.mlstatic.com/D_911983-MLA48750877705_012022-I.jpg",
			"condition": "new"
		}
  ]
  const [items, setItems] = useState(fakeData);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [condition, setCondition] = useState('');
  const [priceOrder, setPriceOrder] = useState('0');
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    (() => {
      setIsLoading(true);
      fetch(`http://localhost:8000/api/search?q=${query}&condition=${condition}&price_order=${priceOrder}&page=${page}`)
      .then(r => r.json())
      .then(response => {
        const items = response.items;
        const nItems = response.total;
        setItems(items);

        let nPages = Math.floor(nItems/30);
        if (nItems % 30 > 0) nPages++;
        let pageNumbers = [];
        for (let i=0; i<nPages; i++) {
          pageNumbers.push(i);
        }
        setPages(pageNumbers);
      })
      .finally(() => setIsLoading(false));
    })();
  }, [query, condition, priceOrder, page]);
  
  const getContainerStyle = () => {
    return {
      margin: 25
    };
  };

  return (
    <div className="App">
      <Container style={getContainerStyle()}>
        <SearchBar isLoading={isLoading} setQuery={setQuery} />
        <Catalog
          isLoading={isLoading}
          items={items}
          condition={condition} setCondition={setCondition}
          priceOrder={priceOrder} setPriceOrder={setPriceOrder}
          page={page} setPage={setPage}
          pages={pages} setPages={setPages}
        />
      </Container>
    </div>
  );
}

export default App;

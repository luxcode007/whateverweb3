import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>My Web App</h1>
      <ScrollingStrip items={['Headline 1', 'Headline 2', 'Headline 3']} />
      <ScrollingStrip items={['Asset 1: $Price1', 'Asset 2: $Price2', 'Asset 3: $Price3']} />
    </div>
  );
}

function ScrollingStrip({ items }) {
  return (
    <div className="scrolling-strip">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function MainContent() {
  return (
    <div className="container">
      <Sidebar items={['Asset A: $PriceA', 'Asset B: $PriceB']} />
      <Feed />
      <Sidebar items={['Asset X: $PriceX', 'Asset Y: $PriceY']} />
    </div>
  );
}

function Sidebar({ items }) {
  return (
    <div className="sidebar">
      <h3>Assets & Prices</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Feed() {
  // Replace with actual fetched data in the future
  const newsItems = ['News item 1', 'News item 2', 'News item 3'];

  return (
    <div className="feed">
      <h2>Latest News</h2>
      <ul>
        {newsItems.map((news, index) => (
          <li key={index}>{news}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


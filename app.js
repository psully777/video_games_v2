/* eslint-disable */

import React from 'react';

import ReactDOM from 'react-dom';
import Games from './games';

const App = () => {
  const [titles, setTitles] = React.useState([]);

  const fetchGames = async () => {
    const response = await fetch('https://api.rawg.io/api/games?search=');
    const data = await response.json();
    setTitles(data.results);
    
  };

  React.useEffect(() => {
    fetchGames();
    
  }, []);

  React.useEffect(() => {
    console.log(titles);
    
  }, [titles]);

  return (
    <>
      <main>
        {titles.map((title) =>(
          <Games key = {title.name}{...title}/>
        ))}
      </main>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

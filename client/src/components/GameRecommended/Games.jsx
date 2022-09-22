import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './games.css';

const Games = () => {
  const [games, setGames] = useState(() => [{ name: 'test' }]);

  useEffect(() => {
    const data = JSON.stringify({
      genre: 'Action',
    });

    const config = {
      method: 'post',
      url: 'http://localhost:8080/game/genre',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    };

    axios(config)
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const test = () => {
    const config = {
      method: 'get',
      url: 'http://localhost:8080/game/subscribe',
    };
    axios(config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h1 className="text">Recommended Games!</h1>
      <button onClick={() => test()}>TEST</button>
      {
        games.map((game) => (
          <div className="card">
            <div className="container">
              <h4 className="text"><b>{game.name}</b></h4>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Games;

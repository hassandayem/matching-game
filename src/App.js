import { useState } from "react";
import "./App.css";
import SingleCard from "./components/singleCard";

const imagesCards = [
  { src: "/images/helmet-1.png" },
  { src: "/images/potion-1.png" },
  { src: "/images/ring-1.png" },
  { src: "/images/scroll-1.png" },
  { src: "/images/shield-1.png" },
  { src: "/images/sword-1.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turn, setTurn] = useState(0);

  console.log(cards, turn);

  // Shuffle Cards
  const shufflCards = () => {
    // Double the cards number in the array
    const cards = [...imagesCards, ...imagesCards]
      // Sort the cards randomly
      .sort(() => Math.random() - 0.3)
      // Give each card a random ID
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(cards);
    setTurn(turn);
  };

  return (
    <div className="App">
      <h1>Practice Your Memory</h1>
      <button onClick={shufflCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => {
          return <SingleCard key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
}

export default App;

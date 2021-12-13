import "./singleCard.css";

const SingleCard = ({ card, handleChoice, flipped }) => {
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="front" />
        <img
          className="back"
          src="/images/cover.png"
          alt="back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SingleCard;

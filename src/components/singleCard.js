import "./singleCard.css";

const SingleCard = ({ card }) => {
  return (
    <div className="card">
      <img src={card.src} alt="front" />
      <img src="/images/cover.png" alt="back" />
    </div>
  );
};

export default SingleCard;

import "./fond.scss";

const Fondito = () => {
  return (
    <div className="stars">
      {Array.from({ length: 50 }).map((_, index) => (
        <div className="star" key={index}></div>
      ))}
    </div>
  );
};

export default Fondito;

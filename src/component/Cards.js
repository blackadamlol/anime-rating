import "./Cards.css";

export default function Cards(props) {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt={props.imgalt} />
        <div className="card_info">
          <p>{props.title}</p>
          <h1>{props.name}</h1>
          <a
            href={`https://${props.link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch Now
          </a>
        </div>
      </div>
    </div>
  );
}

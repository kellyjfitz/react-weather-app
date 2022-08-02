
import "./Header.css";
export default function Header(props) {
  return (
    <div className="Header">
      <h1>
        {props.city}<span className="country">, {props.country}</span>
      </h1>
      <h2>
        <small>
          Local time: <span id="time">This will come</span>
        </small>
        <br />
        <span id="date">Date will come</span>
      </h2>
    </div>
  );
}

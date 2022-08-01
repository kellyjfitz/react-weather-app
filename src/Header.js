
import "./Header.css";
export default function Header(props) {
  return (
    <div className="Header">
      <h1>
        {props.city}
      </h1>
      <h2>
        <small>
          Local time: <span id="time">13:00</span>
        </small>
        <br />
        <span id="date">Tuesday, July 19</span>
      </h2>
    </div>
  );
}

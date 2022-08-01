
import "./Header.css";
export default function Header() {
  return (
    <div className="Header">
      <h1>
        Sydney<span className="country">, AU</span>
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

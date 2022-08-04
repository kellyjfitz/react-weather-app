import "./Header.css";
import DateInfo from "./DateInfo";
export default function Header(props) {
  return (
    <div className="Header">
      <h1>
        {props.city}
        <span className="country">, {props.country}</span>
      </h1>
      <DateInfo timeZone={props.data.timeZone} />
    </div>
  );
}

import "./Head.css";
import DateInfo from "./DateInfo";
export default function Head(props) {
  return (
    <div className="Head">
      <h1>
        {props.city}
        <span className="country">, {props.country}</span>
      </h1>
      <DateInfo timeZone={props.data.timeZone} />
    </div>
  );
}

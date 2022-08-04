export default function BigTemp(props) {
  if (props.unit === "celsius") {
    return <h4>{Math.round(props.temp)}°</h4>;
  } else {
    return <h4>{Math.round(props.convert(props.temp))}°</h4>;
  }
}

export default function Transaction(props) {
  return (
    <tr key={props.id}>
      <td>{props.type}</td>
      <td>{props.amount}</td>
      <td>{props.currency}</td>
    </tr>
  );
}

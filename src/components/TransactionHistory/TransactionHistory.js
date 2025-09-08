import { Table, TableHeader, TableBody } from "./TransactionHistory.styled";

import Transaction from "./Transaction";

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <TableHeader>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHeader>

      <TableBody>
        {items.map((item) => (
          <Transaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </TableBody>
    </Table>
  );
}

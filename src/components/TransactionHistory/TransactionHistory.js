import PropTypes from 'prop-types';

import { Table } from './TransactionHistory.styled';

function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(elem => {
          return (
            <tr key={elem.id}>
              <td>{elem.type}</td>
              <td>{elem.amount}</td>
              <td>{elem.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object),
};

export default TransactionHistory;

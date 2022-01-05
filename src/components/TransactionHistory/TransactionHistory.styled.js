import styled from 'styled-components';

export const Table = styled.table`
  margin: 16px;
  background-color: white;
  color: gray;

  thead {
    background-color: #04c2bb;
    color: white;
    text-transform: uppercase;
  }

  th {
    padding: 8px 16px;
    width: 200px;
  }

  td {
    padding: 8px 16px;

    :first-child {
      text-transform: capitalize;
      text-align: left;
      padding: 8px 16px 8px 64px;
    }
  }

  tr {
    :nth-child(even) {
      background-color: #e0e0e0;
    }
  }
`;

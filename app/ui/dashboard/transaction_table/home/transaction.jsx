import { DummyTransactions, HomeTransactions } from "@/app/lib/data";
function Transaction() {
  return (
    <div >
      <h2>Latest Transactions</h2>
      <table >
        <thead>
          <tr>
            <td>Type</td>
            <td>Date</td>
            <td>Category</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {HomeTransactions.map((item,key)=>(
            <tr key={key}>
              <th>{item.transaction_type}</th>
              <th>{item.createdAt}</th>
              <th>{item.transaction_category}</th>
              <th>{item.transaction_amount}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transaction;

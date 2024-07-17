import { entryTypes } from "@/app/constants/data";
import { fetchTransactions } from "@/app/lib/data";
async function Transaction() {
  const HomeTransactions = await fetchTransactions();
  function getTopFiveLatest(arr) {
    return arr.sort((a, b) => b.transaction_date - a.transaction_date).slice(0, 5);
  }
  const topFive = getTopFiveLatest(HomeTransactions);
  return (
    <div className="bg-[#182237] p-5 rounded-lg my-2 h-[50vh]">
      <h2 className="mb-5 font-extralight text-xl text-[#b7bac1]">Latest Transactions</h2>
      <table className='flex flex-col w-11/12 mx-auto h-11/12  mt-8 bg-[#151C2C] border-2 border-[#151C2C] rounded-md'>
        <thead className='flex'>
          <tr className='basis-full items-center flex  h-[3rem]' >
            <th className='basis-1/5'>Date</th>
            <th className='basis-1/5'>Type</th>
            <th className='basis-1/5'>Category</th>
            <th className='basis-2/5'>Comment</th>
            <th className='basis-1/5'>Amount</th>
          </tr>
        </thead>
        <tbody className='flex flex-col w-full bg-[#182237] mt-4'>
          {topFive.map((items, index) => (
            <tr key={index} className='flex w-full h-14 items-center'>
              <td className='basis-1/5 text-center'>{items.transaction_date.toLocaleDateString()}</td>
              <td className='basis-1/5 text-center' style={{backgroundColor:`${entryTypes[items.transaction_type]}`,borderRadius:"8px"}} >{items.transaction_type}</td>
              <td className='basis-1/5 text-center'>{items.transaction_category}</td>
              <td className='basis-2/5 text-center'>{items.transaction_comments}</td>
              <td className='basis-1/5 text-center'>{items.transaction_amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transaction;
